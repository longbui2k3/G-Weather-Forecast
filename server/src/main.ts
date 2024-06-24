import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_ORIGIN } from './utils/globalVariables';
import cors from 'cors-ts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   allowedHeaders: ['content-type'],
  //   origin: CLIENT_ORIGIN,
  //   credentials: true,
  // });
  app.use(
    cors({
      origin: CLIENT_ORIGIN,
      optionsSuccessStatus: 200,
    }),
  );
  await app.listen(4000);
}
bootstrap();
