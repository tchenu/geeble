import { Controller, Get, Post, Body, Param, UseGuards, Request, Header, Res, Response } from '@nestjs/common';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketService } from './ticket.service';
import { ValidationPipe } from 'src/validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { gateCompanyOwnTicket, gateExists, gateOwnTicket, gateRoles } from 'src/gate';
import { Roles } from 'src/user/roles.enum';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/:uuid')
  async get(@Request() req, @Response() res, @Param('uuid') uuid: string) {
    const ticket = await this.ticketService.findOne(uuid)

    gateExists(ticket)
    gateOwnTicket(ticket, req.user)

    return res.json({
      'image': await this.ticketService.generateQRCode(ticket.id),
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:uuid/used')
  async used(@Request() req, @Response() res, @Param('uuid') uuid: string) {
    const ticket = await this.ticketService.findOne(uuid)

    console.log(req.user)

    gateExists(ticket)
    gateRoles([Roles.ROLE_LEADER], req.user)
    gateCompanyOwnTicket(ticket, req.user)

    return res.json({
      used: await this.ticketService.used(uuid)
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('/use')
  async use(@Request() req, @Body(new ValidationPipe()) updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketService.findOne(updateTicketDto.ticketId)


    console.log(req.user, ticket)

    gateExists(ticket)
    gateRoles([Roles.ROLE_LEADER], req.user)
    gateCompanyOwnTicket(ticket, req.user)

    return this.ticketService.use(updateTicketDto.ticketId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async findMine(@Request() req) {
    return this.ticketService.findAll({ where: { userId: req.user.id } });
  }
}
