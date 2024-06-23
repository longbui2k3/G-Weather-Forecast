import { Body, Controller, Get, Post } from '@nestjs/common';
import { HistoryService } from '../services/history.service';

@Controller('/api/v1/history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  @Get('/')
  async getHistories() {
    return await this.historyService.getHistories();
  }

  @Post('/')
  async createHistory(
    @Body()
    body: {
      location: string;
      date: string;
      temperature: string;
      wind: string;
      humidity: string;
      condition: Object;
    },
  ) {
    console.log('Body:::', body);
    return await this.historyService.createHistory(body);
  }
}
