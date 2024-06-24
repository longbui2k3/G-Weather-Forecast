import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_ORIGIN } from './utils/globalVariables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'],
  });
  await app.listen(4000);
}
bootstrap();
