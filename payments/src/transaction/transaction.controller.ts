import { Controller, Get, Post, Body, Param, UseGuards, Request, Response, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'src/validation.pipe';
import { CreateTransationDto } from './dto/create-transaction.dto';
import { RefundTransationDto } from './dto/refund-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
  ) {}

  /* Api-key AuthGuard routes */

  @UseGuards(AuthGuard('api-key'))
  @Post('/intention')
  async create(@Body(new ValidationPipe()) createTransationDto: CreateTransationDto) {
    return await this.transactionService.create(createTransationDto);
  }

  @UseGuards(AuthGuard('api-key'))
  @Post('/refund')
  async refund(@Body(new ValidationPipe()) refundTransationDto: RefundTransationDto) {
    return await this.transactionService.refund({ slotId: refundTransationDto.slotId})
  }

  /* JwtAuthGuard routes */
  @UseGuards(JwtAuthGuard)
  @Post()
  async confirmPayment(@Response() res, @Body('intentionId') intentionId: string) {
    return res.json({
      status: this.transactionService.confirmPayment({ intentionId: intentionId })
    })
  }
}
