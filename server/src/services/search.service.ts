import { Injectable } from '@nestjs/common';
const API_KEY = 'cf867bb557d04a7bae1103557240507';
@Injectable()
export class SearchService {
  async search(location: string) {
    const days = 10;
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`,
      {
        method: 'GET',
      },
    );

    const data = await response.json();
    if (data.error) {
      return data;
    }
    data.current.name = data.location.name;
    // data.current.last_updated = data.current.last_updated.split(' ')[0];
    data.current.condition.icon = data.current.condition.icon.replace(
      '64x64',
      '128x128',
    );
    data.forecast.forecastday.splice(0, 1);
    return data;
  }
}
