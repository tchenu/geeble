
import { SlotService } from './slot.service';
import { SlotController } from './slot.controller';
import { PrismaService } from '../prisma.service'
import { EventService } from 'src/event/event.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [SlotController],
  providers: [SlotService, EventService, PrismaService],
  imports: [HttpModule]
})
export class SlotModule {}
