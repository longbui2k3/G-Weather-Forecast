import { Controller, Get, Query, Req } from '@nestjs/common';
import { SearchService } from 'src/services/search.service';

@Controller('/api/v1/search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get('/')
  async search(@Query('location') location: string) {
    return await this.searchService.search(location);
  }
}
