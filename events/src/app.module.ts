import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { EventModule } from './event/event.module';
import { SlotModule } from './slot/slot.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [EventModule, SlotModule],
})
export class AppModule {}
