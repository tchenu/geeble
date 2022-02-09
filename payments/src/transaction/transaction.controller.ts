import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus, UseGuards, Request, HttpException } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
  ) {}

  /* JwtAuthGuard routes */

  //@UseGuards(JwtAuthGuard)
  @Post('/intention')
  async create(@Request() req, @Body() body) {
    return await this.transactionService.create(body.ticketId);
  }

  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    return this.transactionService.findOne({ id: id });
  }

  @Post(':id/refund')
  async refund(@Request() req, @Param('id') id: string) {
    return this.transactionService.refund({ id: id });
  }
}
