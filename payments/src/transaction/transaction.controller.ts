import { Controller, Get, Post, Body, Param, UseGuards, Request, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'src/validation.pipe';
import { CreateTransationDto } from './dto/create-transaction.dto';
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

  /* Unprotected routes */
  @UseGuards(JwtAuthGuard)
  @Post()
  async confirmPayment(@Response() res, @Body('intentionId') intentionId: string) {
    return res.json({
      status: this.transactionService.confirmPayment({ intentionId: intentionId })
    })
  }

  @Post(':id/refund')
  async refund(@Request() req, @Param('id') id: string) {
    return this.transactionService.refund({ id: id });
  }
}
