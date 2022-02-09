import { Controller, Get, Post, Body, Patch, Param, Put, UseGuards, Request, Query, Response } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ValidationPipe } from 'src/validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EventStatus } from '@prisma/client';
import { QueryEventDto } from './dto/query-event.dto';
import { Roles } from 'src/user/roles.enum';
import { gateOwnEvent, gateExists, gateRoles, gateRolesAndOwn } from 'src/gate';
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  /* JwtAuthGuard routes */

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req, @Body(new ValidationPipe()) createEventDto: CreateEventDto) {
    gateOwnEvent(req.user)
    gateRoles([Roles.ROLE_LEADER, Roles.ROLE_EDITOR], req.user)

    return this.eventService.create(createEventDto, req.user.id, req.user.companyId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/company')
  async findByCompany(@Request() req) {
    gateOwnEvent(req.user)

    return this.eventService.findAll({
      where: { companyId : req.user.companyId }
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':slug')
  async update(@Request() req, @Param('slug') slug: string, @Body(new ValidationPipe()) updateEventDto: UpdateEventDto) {
    const event = await this.eventService.findOne({ slug: slug });

    gateRolesAndOwn(event, [Roles.ROLE_LEADER, Roles.ROLE_EDITOR], req.user);

    return this.eventService.update({
      where: { slug: slug },
      data: updateEventDto,
      companyId: req.user.companyId,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':slug/publish')
  async publish(@Request() req, @Param('slug') slug: string) {
    const event = await this.eventService.findOne({ slug: slug });

    gateRolesAndOwn(event, [Roles.ROLE_LEADER, Roles.ROLE_PUBLISHER], req.user);

    await this.eventService.update({
      where: { slug: slug },
      data: { status: EventStatus.PUBLISHED },
      companyId: req.user.companyId,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':slug/unpublish')
  async unpublish(@Request() req, @Param('slug') slug: string) {
    const event = await this.eventService.findOne({ slug: slug });

    gateRolesAndOwn(event, [Roles.ROLE_LEADER, Roles.ROLE_PUBLISHER], req.user);

    await this.eventService.update({
      where: { slug: slug },
      data: { status: EventStatus.CANCELED },
      companyId: req.user.companyId,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':slug/slots')
  async findSlots(@Request() req, @Param('slug') slug: string) {
    const event = await this.eventService.findOneWithSlots({ slug: slug })

    gateRolesAndOwn(event, [Roles.ROLE_LEADER], req.user);

    return event.slots
  }

  /* Public routes */

  @Get()
  async findAll(@Query() query: QueryEventDto) {
    const today = new Date()
    today.setHours(0,0,0,0)

    return this.eventService.findAll({
      skip: query.skip,
      take: query.take,
      orderBy: {date: "asc"},
      where: {
        date: {
          gte: today
        },
      },
    });
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const event = await this.eventService.findOne({ slug: slug })

    gateExists(event)

    return event
  }

  @Get(':slug/available')
  async findSlotsAvailable(@Response() res, @Param('slug') slug: string) {
    const event = await this.eventService.findOneAvailable({ slug: slug })

    gateExists(event)

    const reserved = event.slots.reduce((quantity, slot) => quantity + slot.quantity, 0);

    return res.json({
      'seats': event.seats,
      'reserved': reserved,
      'availables': event.seats - reserved
    });
  }
}
