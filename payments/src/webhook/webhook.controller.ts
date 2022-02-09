import { Controller, Post, Body, Request, Headers } from '@nestjs/common';
import { TransactionStatus } from '@prisma/client';
import { TransactionService } from 'src/transaction/transaction.service';

@Controller('webhooks')
export class WebhookController {
  constructor(
    private readonly transactionService: TransactionService,
  ) {}

  @Post('/stripe')
  async stripe(@Body() body) {
    const event = body

    /**
    switch (event.type) {
      case 'payment_intent.succeeded':
        this.transactionService.update(
          { where: { intentionId: event.id },
          data: { status: TransactionStatus.CAPTURED}}
        );
    }
    */

    return {};
  }
}
