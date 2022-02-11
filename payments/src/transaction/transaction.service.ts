import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Transaction,
  Prisma,
  TransactionStatus,
  TransactionCurrency,
} from '@prisma/client';
import { CreateTransationDto } from './dto/create-transaction.dto';
import { Stripe } from 'src/stripe/stripe'
import { MqttService } from 'nest-mqtt';

@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService,
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  async create(createTransationDto: CreateTransationDto) {
    const intention = await Stripe.paymentIntents.create({
      amount: createTransationDto.amount,
      currency: TransactionCurrency.EUR,
    })

    const transaction = await this.prisma.transaction.create({
      data: {
        ticketId: createTransationDto.slotId,
        intentionId: intention.id,
        amount: createTransationDto.amount,
      },
    });

    return {
      slotId: transaction.id,
      intentionId: intention.client_secret,
    };
  }

  async findOne(intentionWhereUniqueInput: Prisma.TransactionWhereUniqueInput) {
    return this.prisma.transaction.findUnique({
      where: intentionWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.TransactionWhereInput;
  }): Promise<Transaction> {
    const { where, data } = params;
    return this.prisma.transaction.update({
      where,
      data
    });
  }

  async refund(slotWhereUniqueInput: Prisma.TransactionWhereUniqueInput): Promise<Transaction> {
    const transaction = await this.prisma.transaction.findUnique({
      where: slotWhereUniqueInput,
    });

    if (transaction.status !== TransactionStatus.succeeded) {
      throw new HttpException('Transaction is not captured', HttpStatus.FORBIDDEN);
    }

    const refund = await Stripe.refunds.create({
      payment_intent: transaction.intentionId,
    });

    const updatedTransaction = await this.prisma.transaction.update({
      where: slotWhereUniqueInput,
      data: {
        refundId: refund.id,
        status: TransactionStatus.refunded,
      },
    });

    return updatedTransaction;
  }

  async confirmPayment(intentionWhereUniqueInput: Prisma.TransactionWhereUniqueInput) {
    const transaction = await this.findOne(intentionWhereUniqueInput);

    if (transaction.status != TransactionStatus.requires_payment_method) return

    const paymentIntents = await Stripe.paymentIntents.retrieve(transaction.intentionId)

    this.update({
      where: intentionWhereUniqueInput,
      data: { status: paymentIntents.status}
    });

    this.mqttService.publish('confirm-payment', {
      slotId: transaction.ticketId,
      transactionId: transaction.id,
      status: paymentIntents.status
    });

    return paymentIntents.status
  }
}
