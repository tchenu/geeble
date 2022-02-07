import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MqttModule } from 'nest-mqtt';
import { TicketService } from './ticket/ticket.service';

@Module({
  imports: [MqttModule.forRoot({
      host: '0.0.0.0',
      port: 1883,
      clientId: 'emqx',
      clean: false ,
    })],
  controllers: [AppController],
  providers: [AppService, PrismaService, TicketService],
})
export class AppModule {}
