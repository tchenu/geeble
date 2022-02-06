import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus, UseGuards, Request, HttpException } from '@nestjs/common';
import { SlotService } from './slot.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { ValidationPipe } from 'src/validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EventService } from 'src/event/event.service';
import { gateAdmin, gateExists, gateOwn, gateRoles, gateTooLate } from 'src/slot/event.gate';
import { Roles } from 'src/user/roles.enum';
import { SlotStatus } from '@prisma/client';

@Controller('slot')
export class SlotController {
  constructor(
    private readonly slotService: SlotService,
    private readonly eventService: EventService
  ) {}

  /* JwtAuthGuard routes */

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req, @Body(new ValidationPipe()) createEventDto: CreateSlotDto) {
    gateRoles([Roles.ROLE_USER], req.user)

    return this.slotService.create(createEventDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async findAll(@Request() req) {
    gateAdmin(req.user)

    return this.slotService.findAll({});
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findMine(@Request() req) {
    gateAdmin(req.user)

    return this.slotService.findAllWithEvent({ where: { userId: req.user.id } });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    gateAdmin(req.user)

    return this.slotService.findOne({ id: id });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/refund')
  @HttpCode(HttpStatus.NO_CONTENT)
  async refund(@Request() req, @Param('id') id: string) {
    const slot = await this.slotService.findOneWithEvent({id: id})

    gateExists(slot)
    gateOwn(slot, req.user)
    gateTooLate(slot)

    return this.slotService.update({ where: { id: id }, data: { status: SlotStatus.REFOUND}});
  }
}
