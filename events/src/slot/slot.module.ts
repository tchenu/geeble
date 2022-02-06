import { Module } from '@nestjs/common';
import { SlotService } from './slot.service';
import { SlotController } from './slot.controller';
import { PrismaService } from '../prisma.service'
import { EventService } from 'src/event/event.service';

@Module({
  controllers: [SlotController],
  providers: [SlotService, EventService, PrismaService]
})
export class SlotModule {}
