import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StatController } from './stat.controller';
import { StatService } from './stat.service';


@Module({
  controllers: [StatController],
  providers: [StatService, PrismaService],
})
export class StatModule {}
