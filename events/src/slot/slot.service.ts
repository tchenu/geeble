import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Slot,
  Prisma,
  SlotStatus,
} from '@prisma/client';
import { MqttService, Payload, Subscribe } from 'nest-mqtt';
import { ProcessSlotDto } from './dto/process-slot.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Cron, CronExpression } from '@nestjs/schedule';


@Injectable()
export class SlotService {
  private readonly logger = new Logger(SlotService.name);

  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  async create(processSlotDto: ProcessSlotDto) {
    const slot = await this.prisma.slot.create({
      data: {
        quantity: processSlotDto.quantity,
        userId: processSlotDto.userId,
        event: {
          connect: { id: processSlotDto.eventId }
        }
      },
    });

    try {
      const response = await firstValueFrom(
        this.httpService.post(`${process.env.PAYMENT_DOMAIN}/transactions/intention`, {
          slotId: slot.id,
          amount: processSlotDto.amount
        }, { headers: { "x-api-key": process.env.API_KEY }})
      );

      return response.data;
    } catch(exception) {
      throw new HttpException("Unauthorizde", HttpStatus.UNAUTHORIZED)
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SlotWhereUniqueInput;
    where?: Prisma.SlotWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput;
  }): Promise<Slot[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.slot.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findAllWithEvent(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SlotWhereUniqueInput;
    where?: Prisma.SlotWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput;
  }): Promise<Slot[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.slot.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {event: true}
    });
  }

  async findOne(slotWhereUniqueInput: Prisma.SlotWhereUniqueInput) {
    return this.prisma.slot.findUnique({
      where: slotWhereUniqueInput,
    });
  }

  async findOneWithEvent(slotWhereUniqueInput: Prisma.SlotWhereUniqueInput) {
    return this.prisma.slot.findUnique({
      where: slotWhereUniqueInput,
      include: { event: true }
    });
  }

  async update(params: {
    where: Prisma.SlotWhereUniqueInput;
    data: Prisma.SlotUpdateInput;
  }): Promise<Slot> {
    const { where, data } = params;
    return this.prisma.slot.update({
      where,
      data
    });
  }

  async remove(where: Prisma.SlotWhereUniqueInput) {
    if(! await this.findOne(where)) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.slot.delete({
      where,
    });
  }

  @Subscribe('confirm-payment')
  async confirmPayment(@Payload() payload) {
    const {slotId, transactionId, status} = payload

    const convertedStatus = this.convertStripeStatus(status);

    this.update({
      where: { id: slotId },
      data: {
        transaction: transactionId,
        status: convertedStatus
      }
    });

    const slot = await this.findOneWithEvent({id: slotId});

    if (convertedStatus == SlotStatus.COMPLETED) {
      this.logger.log(`Ask the creation of ${slot.quantity} tickets for ${slot.id}`)

      this.mqttService.publish('create-tickets', {
        userId: slot.userId,
        eventId: slot.eventId,
        companyId: slot.event.companyId,
        slotId: slot.id,
        quantity: slot.quantity
      })
    }
  }

  convertStripeStatus(status: string): SlotStatus {
    const convert = {
      canceled: SlotStatus.CANCELED,
      processing: SlotStatus.PENDING,
      requires_action: SlotStatus.PENDING,
      requires_capture: SlotStatus.PENDING,
      requires_confirmation: SlotStatus.PENDING,
      requires_payment_method: SlotStatus.PENDING,
      succeeded: SlotStatus.COMPLETED,
      refunded: SlotStatus.REFUND,
    };

    return convert[status]
  }

  async refund(slotId: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${process.env.PAYMENT_DOMAIN}/transactions/refund`, {
          slotId: slotId
        }, { headers: { "x-api-key": process.env.API_KEY }})
      );

      this.logger.log(`Refund slot of ${slotId}`)

      await this.update({
        where: { id: slotId },
        data: {
          status: SlotStatus.REFUND
        }
      });

      this.mqttService.publish('refund-payment', {
        slotId: slotId
      })

    } catch(exception) {
      if (exception.response.data.message === "charge_already_refunded") {
        throw new HttpException(exception.response.data.message, exception.response.data.statusCode)
      }
    }
  }


  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    this.logger.log('Cron, clear expired slots')

    const expire = new Date()
    expire.setMinutes(expire.getMinutes() - 10)

    await this.prisma.slot.updateMany({
      where: {
        status: SlotStatus.PENDING,
        createdAt:  { lte: expire }
      },
      data: {
        status: SlotStatus.CANCELED
      }
    })
  }
}
