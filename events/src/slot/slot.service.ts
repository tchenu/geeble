import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Slot,
  Prisma,
} from '@prisma/client';
import { MqttService, Payload, Subscribe } from 'nest-mqtt';
import { ProcessSlotDto } from './dto/process-slot.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class SlotService {
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
}
