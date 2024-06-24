import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_ORIGIN } from './utils/globalVariables';
import { NextFunction, Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Accept: 'application/json',
    //   //   "Content-Type": "application/json;charset=UTF-8",
      next();
  });
  app.enableCors(options);
  await app.listen(4000);
}
bootstrap();
