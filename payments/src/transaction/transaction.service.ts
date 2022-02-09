import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Status } from './enums/status.enum';
import { Currency } from './enums/currency';
import { PrismaService } from '../prisma.service';
import {
  Transaction,
  Prisma,
} from '@prisma/client';
import { MqttService } from 'nest-mqtt';
import Stripe from 'stripe';

@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService,
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  async create(ticketId: string) {
    const stripe = new Stripe(
      process.env.STRIPE_SECRET_KEY,
      {apiVersion: null},
    );

    //@todo: need an endpoint to get amount for specific order
    const amount = 1000; // (1000 = 10 units)

    const intention = await stripe.paymentIntents.create({
      amount: amount,
      currency: Currency.EUR,
    })

    const transaction = await this.prisma.transaction.create({
      data: {
        ticketId: ticketId,
        intentionId: intention.id,
        amount: amount,
        currency: Currency.EUR,
        status: Status.Init,
      },
    });

    transaction['intentionSecret'] = intention.client_secret;

    return transaction;
  }

  async findOne(slotWhereUniqueInput: Prisma.TransactionWhereUniqueInput): Promise<Transaction> {
    return this.prisma.transaction.findUnique({
      where: slotWhereUniqueInput,
    });
  }

  async refund(slotWhereUniqueInput: Prisma.TransactionWhereUniqueInput): Promise<Transaction> {
    const transaction = await this.prisma.transaction.findUnique({
      where: slotWhereUniqueInput,
    });

    if (transaction.status !== Status.Captured) {
      throw new HttpException('Transaction is not captured', HttpStatus.FORBIDDEN);
    }

    const stripe = new Stripe(
      process.env.STRIPE_SECRET_KEY,
      {apiVersion: null},
    );

    const refund = await stripe.refunds.create({
      payment_intent: transaction.intentionId,
    });

    const updatedTransaction = await this.prisma.transaction.update({
      where: slotWhereUniqueInput,
      data: {
        refundId: refund.id,
        status: Status.Refunded,
      },
    });

    return updatedTransaction;
  }
}
