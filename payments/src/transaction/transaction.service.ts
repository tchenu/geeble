import { Injectable, HttpException, HttpStatus, Inject, Logger } from '@nestjs/common';
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
  private readonly logger = new Logger(TransactionService.name);

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
        slotId: createTransationDto.slotId,
        intentionId: intention.id,
        amount: createTransationDto.amount,
      },
    });

    return {
      slotId: transaction.slotId,
      clientSecret: intention.client_secret,
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

  async refund(slotWhereUniqueInput: Prisma.TransactionWhereUniqueInput) {
    const transaction = await this.prisma.transaction.findUnique({
      where: slotWhereUniqueInput,
    });

    if (transaction.status !== TransactionStatus.succeeded) {
      throw new HttpException('Transaction is not captured', HttpStatus.FORBIDDEN);
    }
    try {
      const refund = await Stripe.refunds.create({
        payment_intent: transaction.intentionId,
      });

      await this.prisma.transaction.update({
        where: slotWhereUniqueInput,
        data: {
          refundId: refund.id,
          status: TransactionStatus.refunded,
        },
      });

      this.logger.log(`Refund of ${transaction.id} of slot ${transaction.slotId}`)
    } catch (exception) {
      throw new HttpException(exception.code, exception.statusCode)
    }
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
      slotId: transaction.slotId,
      transactionId: transaction.id,
      status: paymentIntents.status
    });

    return paymentIntents.status
  }
}
