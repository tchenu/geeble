import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { EventModule } from './event/event.module';
import { SlotModule } from './slot/slot.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MqttModule } from 'nest-mqtt';
import { StatModule } from './stat/stat.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MqttModule.forRoot({
      host: process.env.MQTT_HOST,
      port: Number(process.env.MQTT_PORT),
      clientId: process.env.MQTT_CLIENT_ID,
      clean: false ,
    }),
    EventModule,
    SlotModule,
    AuthModule,
    StatModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
