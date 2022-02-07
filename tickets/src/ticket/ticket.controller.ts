import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UsedTicketDto } from './dto/used-ticket.dto';
import { UseTicketDto } from './dto/use-ticket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('/:uuid')
  async get(@Param() params) {
    return this.ticketService.get(params.uuid);
  }

  @Get('/used')
  async used(@Body() useTicketDto: UsedTicketDto) {
    return this.ticketService.used(useTicketDto.ticketId);
  }

  @Post('/use')
  async use(@Body() useTicketDto: UseTicketDto) {
    return this.ticketService.use(useTicketDto.ticketId);
  }

  @Get('/')
  async all(@Query() queryParams) {
    this.ticketService.testPublish();

    return this.ticketService.all({
      eventId: queryParams.eventId,
      userId: queryParams.userId,
    })
  }

  @Post('/')
  async create(@Body() createTicketDto: CreateTicketDto) {
    const tickets = [];

    for (let i = 0; i < createTicketDto.count; i++) {
      tickets.push(await this.ticketService.create({
        eventId: createTicketDto.eventId,
        userId: createTicketDto.userId,
        data: {},
        used: false,
        createdAt: new Date()
      }));
    }

    return await Promise.all(
      tickets.map(async (ticket) => ({...ticket, qrCode: await this.ticketService.generateQRCode(ticket.id)}))
    );
  }
}
