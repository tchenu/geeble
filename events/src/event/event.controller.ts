import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ValidationPipe } from 'src/validation.pipe';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  async findAll() {
    return this.eventService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.eventService.findOne({ id: Number(id) });
  }

  @Get('/user/:id')
  async findByUser(@Param('id') id: string) {
    return this.eventService.findAll({
      where: { user : Number(id) }
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateEventDto: UpdateEventDto) {
    return this.eventService.update({
      where: { id: Number(id) },
      data: updateEventDto
    });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.eventService.remove({ id: Number(id) });
  }

  @Put('/publish/:id')
  async publish(@Param('id') id: string) {
    return this.eventService.update({
      where: { id: Number(id) },
      data: { published: true }, 
    });
  }
}
