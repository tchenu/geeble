import { Inject, Injectable } from '@nestjs/common';
import { Subscribe, Payload, Topic, MqttService } from 'nest-mqtt';
import { PrismaService } from 'src/prisma.service';
import { toDataURL as QRCode } from 'qrcode';
import {
  Ticket,
  Prisma,
} from '@prisma/client';

@Injectable()
export class TicketService {
  constructor(
    private prisma: PrismaService,
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  @Subscribe('ticket')
  test(@Payload() payload) {
    console.log(payload);
  }

  async testPublish() {
    this.mqttService.publish('topic', {
      foo: 'bar'
    });
  }

  async all(params: {eventId: string, userId: string}): Promise<Ticket[]> {
    return this.prisma.ticket.findMany({
      where: {
        eventId: params.eventId,
        userId: params.userId
      }
    })
  }

  async get(ticketId: string): Promise<Ticket | null> {
    return this.prisma.ticket.findFirst({
      where: {
        id: ticketId
      }
    });
  }

  async use(ticketId: string): Promise<Ticket | null> {
    return this.prisma.ticket.update({
      where: {
        id: ticketId
      },
      data: {used: true}
    });
  }

  async used(ticketId: string): Promise<boolean> {
    return await this.prisma.ticket.count({
      where: {
        id: ticketId,
        used: true
      }
    }) == 1;
  }

  async create(data: Prisma.TicketCreateInput): Promise<Ticket | null> {
    return this.prisma.ticket.create({data: data});
  }

  async generateQRCode(text: string): Promise<string> {
    try {
      return await QRCode(text);
    } catch (err) {
      throw err;
    }
  }
}
