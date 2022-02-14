import { Controller, Get, Post, Body, Param, Put, HttpCode, HttpStatus, UseGuards, Request, Response } from '@nestjs/common';
import { SlotService } from './slot.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { ValidationPipe } from 'src/validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EventService } from 'src/event/event.service';
import { gateAdmin, gateExists, gateOwnSlot, gateRoles, gateTooLate } from 'src/gate';
import { Roles } from 'src/user/roles.enum';
import { SlotStatus } from '@prisma/client';
import { ProcessSlotDto } from './dto/process-slot.dto';

@Controller('slot')
export class SlotController {
  constructor(
    private readonly slotService: SlotService,
    private readonly eventService: EventService
  ) {}

  /* JwtAuthGuard routes */

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req, @Response() res, @Body(new ValidationPipe()) createEventDto: CreateSlotDto) {
    const event = await this.eventService.findOne({slug: createEventDto.slug})

    gateRoles([Roles.ROLE_USER], req.user)
    gateExists(event)

    const processSlotDto = new ProcessSlotDto();
    processSlotDto.userId = req.user.id;
    processSlotDto.eventId = event.id;
    processSlotDto.quantity = createEventDto.quantity;
    processSlotDto.amount = Number((event.price * createEventDto.quantity).toFixed(2)) * 100

    return res.json(await this.slotService.create(processSlotDto));
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
    return this.slotService.findAllWithEvent({ where: { userId: req.user.id } });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    const slot = await this.slotService.findOneWithEvent({ id: id });

    gateOwnSlot(slot, req.user)

    return slot
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/refund')
  @HttpCode(HttpStatus.NO_CONTENT)
  async refund(@Request() req, @Param('id') id: string) {
    const slot = await this.slotService.findOneWithEvent({id: id})

    gateExists(slot)
    gateOwnSlot(slot, req.user)
    gateTooLate(slot)

    return this.slotService.refund(slot.id);
  }
}
