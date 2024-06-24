import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_ORIGIN } from './utils/globalVariables';
import { NextFunction, Request, Response } from 'express';
import express from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json());
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);
  await app.listen(4000);
}
bootstrap();
