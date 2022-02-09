import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { WebhookController } from './webhook.controller';

@Module({
  controllers: [WebhookController],
  providers: [TransactionService, PrismaService]
})
export class WebhookModule {}
