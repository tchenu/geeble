import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Transaction,
  Prisma,
  TransactionStatus,
  TransactionCurrency,
} from '@prisma/client';
import { CreateTransationDto } from './dto/create-transaction.dto';
import { Stripe } from 'src/stripe/stripe'

@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService,
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

  async findOne(slotWhereUniqueInput: Prisma.TransactionWhereUniqueInput): Promise<Transaction> {
    return this.prisma.transaction.findUnique({
      where: slotWhereUniqueInput,
    });
  }

  async refund(slotWhereUniqueInput: Prisma.TransactionWhereUniqueInput): Promise<Transaction> {
    const transaction = await this.prisma.transaction.findUnique({
      where: slotWhereUniqueInput,
    });

    if (transaction.status !== TransactionStatus.CAPTURED) {
      throw new HttpException('Transaction is not captured', HttpStatus.FORBIDDEN);
    }

    const refund = await Stripe.refunds.create({
      payment_intent: transaction.intentionId,
    });

    const updatedTransaction = await this.prisma.transaction.update({
      where: slotWhereUniqueInput,
      data: {
        refundId: refund.id,
        status: TransactionStatus.REFUNDED,
      },
    });

    return updatedTransaction;
  }
}
