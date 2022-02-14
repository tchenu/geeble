import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import {
  Event,
  Prisma,
  SlotStatus
} from '@prisma/client';
import slugify from 'slugify';
import { MqttService } from 'nest-mqtt';

@Injectable()
export class EventService {
  constructor(
    private prisma: PrismaService,
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  async create(createEventDto: CreateEventDto, userId: string, companyId: string) {
    const slug = slugify(createEventDto.name, {lower: true, strict: true});

    if(await this.findOne({slug: slug})) {
      throw new HttpException("slug must be unique", HttpStatus.BAD_REQUEST);
    }

    return this.prisma.event.create({
      data: {
        ...createEventDto,
        slug: slug,
        userId: userId,
        companyId: companyId
      },
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

  async findOneWithSlots(eventWhereUniqueInput: Prisma.EventWhereUniqueInput) {
    return this.prisma.event.findUnique({
      where: eventWhereUniqueInput,
      include: {slots: true},
    });
  }

  async findOneAvailable(eventWhereUniqueInput: Prisma.EventWhereUniqueInput) {

    return this.prisma.event.findUnique({
      where: {
        slug: eventWhereUniqueInput.slug,
      },
      include: {
        slots: {
          where: {
            status: { not: SlotStatus.CANCELED }
          }
        }
      },
    });
  }

  async update(params: {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.EventUpdateInput;
    companyId: string;
  }): Promise<Event> {
    const { where, data, companyId } = params;

    return this.prisma.event.update({
      where,
      data,
    });
  }
}
