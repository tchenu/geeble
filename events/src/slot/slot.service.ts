import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import {
  Slot,
  Prisma,
} from '@prisma/client';
import { MqttService } from 'nest-mqtt';


@Injectable()
export class SlotService {
  constructor(
    private prisma: PrismaService,
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  async create(userId: string, eventId: string, companyId: string, quantity: number) {
    this.mqttService.publish('create-tickets', {
      eventId: eventId,
      userId: userId,
      companyId: companyId,
      quantity: quantity,
    });

    return this.prisma.slot.create({
      data: {
        quantity: quantity,
        userId: userId,
        event: {
          connect: { id: eventId }
        }
      },
    });
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
}
