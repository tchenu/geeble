import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { EventModule } from './event/event.module';
import { SlotModule } from './slot/slot.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [ConfigModule.forRoot(), EventModule, SlotModule, AuthModule],
})
export class AppModule {}
