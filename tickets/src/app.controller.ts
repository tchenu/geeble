import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDTO } from './dto/create.dto';
import { UsedDTO } from './dto/used.dto';
import { UseDTO } from './dto/use.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:uuid')
  async get(@Param() params) {
    return this.appService.get(params.uuid);
  }

  @Get('/used')
  async used(@Body() UsedDTO: UsedDTO) {
    return this.appService.used(UsedDTO.ticketId);
  }

  @Post('/use')
  async use(@Body() UseDTO: UseDTO) {
    return this.appService.use(UseDTO.ticketId);
  }

  @Get('/')
  async all(@Query() queryParams) {
    return this.appService.all({
      eventId: queryParams.eventId,
      userId: queryParams.userId,
    })
  }

  @Post('/')
  async create(@Body() createDTO: CreateDTO) {
    const tickets = [];

    for (let i = 0; i < createDTO.count; i++) {
      tickets.push(await this.appService.create({
        eventId: createDTO.eventId,
        userId: createDTO.userId,
        data: {},
        used: false,
        createdAt: new Date()
      }));
    }
    
    return await Promise.all(
      tickets.map(async (ticket) => ({...ticket, qrCode: await this.appService.generateQRCode(ticket.id)}))
    );
  }
}
