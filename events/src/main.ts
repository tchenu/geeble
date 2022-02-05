import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { jwtConstants } from './auth/constants';
import { PrismaService } from './prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  await app.listen(3000);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app)

}
bootstrap();
