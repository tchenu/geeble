import { Inject, Injectable } from '@nestjs/common';
import { Subscribe, Payload, Topic, MqttService } from 'nest-mqtt';

@Injectable()
export class TicketService {
  constructor(
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  @Subscribe('topic')
  test(@Payload() payload) {
    console.log(payload);
  }

  async testPublish() {
    this.mqttService.publish('topic', {
      foo: 'bar'
    });
  }
}