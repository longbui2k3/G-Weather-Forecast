import { Global, Module } from '@nestjs/common';
import { SearchController } from '../controllers/search.controller';
import { SearchService } from '../services/search.service';

@Global()
@Module({
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
