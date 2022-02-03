import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { SlotService } from './slot.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { ValidationPipe } from 'src/validation.pipe';

@Controller('slot')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createEventDto: CreateSlotDto) {
    return this.slotService.create(createEventDto);
  }

  @Get()
  async findAll() {
    return this.slotService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.slotService.findOne({ id: Number(id) });
  }

  @Get('/event/:id')
  async findByEvent(@Param('id') id: string) {
    return this.slotService.findAll({
      where: { eventId : Number(id) }
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateSlotDto: UpdateSlotDto) {
    return this.slotService.update({
      where: { id: Number(id) },
      data: updateSlotDto
    });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.slotService.remove({ id: Number(id) });
  }
}
