import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { History } from '../models/history.model';

@Injectable()
export class HistoryService {
  constructor(@InjectModel('History') private historyModel: Model<History>) {}

  async getHistories() {
    let histories: any = await this.historyModel.find().lean();
    histories = histories
      .map((history) => {
        history.weatherInfo.name = history.weatherInfo.location;
        history.weatherInfo.last_updated = history.weatherInfo.date;
        history.weatherInfo.temp_c = history.weatherInfo.temperature;
        history.weatherInfo.wind_mph = history.weatherInfo.wind;
        return history;
      })
      .reverse();
    return histories;
  }

  async createHistory(body: {
    location: string;
    date: string;
    temperature: string;
    wind: string;
    humidity: string;
    condition: Object;
  }) {
    const now = new Date();
    const expiredAt = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
    );
    expiredAt.setHours(0, 0, 0, 0); // Set time to 12:00 AM
    return await this.historyModel.create({
      weatherInfo: body,
      expiredAt,
    });
  }
}
