import { Module } from '@nestjs/common';
import { SlotService } from './slot.service';
import { SlotController } from './slot.controller';
import { PrismaService } from '../prisma.service'

@Module({
  controllers: [SlotController],
  providers: [SlotService, PrismaService]
})
export class SlotModule {}
