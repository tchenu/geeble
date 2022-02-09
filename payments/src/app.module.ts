import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { MqttModule } from 'nest-mqtt';
import { TransactionModule } from './transaction/transaction.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MqttModule.forRoot({
      host: process.env.MQTT_HOST,
      port: Number(process.env.MQTT_PORT),
      clientId: process.env.MQTT_CLIENT_ID,
      clean: false ,
    }),
    TransactionModule,
    WebhookModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
