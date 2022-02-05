import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import {
  Slot,
  Prisma,
} from '@prisma/client';


@Injectable()
export class SlotService {
  constructor(private prisma: PrismaService) {}
  
  async create(createSlotDto: CreateSlotDto) {
    return this.prisma.slot.create({
      data: {
        quantity: createSlotDto.quantity,
        userId: createSlotDto.userId,
        event: { 
          connect: { id: createSlotDto.eventId }
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

  async findOne(slotWhereUniqueInput: Prisma.SlotWhereUniqueInput) {
    return this.prisma.slot.findUnique({
      where: slotWhereUniqueInput,
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
