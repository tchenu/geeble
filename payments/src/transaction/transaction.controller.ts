import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ValidationPipe } from 'src/validation.pipe';
import { CreateTransationDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
  ) {}

  /* JwtAuthGuard routes */

  @UseGuards(AuthGuard('api-key'))
  @Post('/intention')
  async create(@Body(new ValidationPipe()) createTransationDto: CreateTransationDto) {
    return await this.transactionService.create(createTransationDto);
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
