import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { EmailService } from '../services/email.service';

@Controller('/api/v1/email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('/send')
  @Header('Accept', 'application/json')
  @Header('Content-Type', 'application/json;charset=UTF-8')
  async sendEmail(@Body() body: { email: string }) {
    return await this.emailService.sendEmail(body.email);
  }

  @Get('/confirm/:token')
  async confirmEmail(@Param('token') token: string) {
    return await this.emailService.confirmEmail(token);
  }

  @Get('/unsubscribe/:token')
  async unsubscribeEmail(@Param('token') token: string) {
    return await this.emailService.unsubscribeEmail(token);
  }
}
