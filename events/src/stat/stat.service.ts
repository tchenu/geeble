import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Prisma, SlotStatus,
} from '@prisma/client';

@Injectable()
export class StatService {
  constructor(private prisma: PrismaService) {}

  protected formatDate(date: Date) {
    const day : string = date.getDate().toString().padStart(2, "0");
    const month : string = date.getMonth().toString().padStart(2, "0");
    const year : string = date.getFullYear().toString();

    return `${year}-${month}-${day}`
  }

  async adminEarn() {
    const limit = new Date()
    const stat = new Map<string, number>()

    limit.setDate(limit.getDate() - 7);

    for (const date = new Date(+limit); date <= new Date(); date.setDate(date.getDate() + 1)) {
      stat.set(this.formatDate(date), 0);
    }

    const data = (await this.prisma.slot.findMany({
      where: {
        status: SlotStatus.COMPLETED,
        createdAt: { gte: limit }
      },
      include: {
        event: {
          select: { price: true },
        },
      },
    }))

    data.forEach((slot) => {
      const date = this.formatDate(slot.createdAt);
      const price = Number((slot.quantity * slot.event.price).toFixed(2))

      stat.set(date, stat.get(date) + price)
    });

    const result = Array.from(stat, ([date, price]) => ({ date, price }));

    return {
      total: result.reduce((acc, value) => acc + value.price, 0),
      detail: result
    }
  }
}
