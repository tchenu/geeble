import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  await app.listen(3002);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app)
}
bootstrap();
