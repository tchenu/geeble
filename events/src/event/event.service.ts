import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import {
  Event,
  Prisma
} from '@prisma/client';


@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}
  
  async create(createEventDto: CreateEventDto) {
    return this.prisma.event.create({
      data: createEventDto,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EventWhereUniqueInput;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput;
  }): Promise<Event[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.event.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(eventWhereUniqueInput: Prisma.EventWhereUniqueInput) {
    return this.prisma.event.findUnique({
      where: eventWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.EventWhereInput;
  }): Promise<Event> {
    const { where, data } = params;
    return this.prisma.event.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.EventWhereUniqueInput) {
    if(! await this.findOne(where)) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.event.delete({
      where,
    });
  }
}
