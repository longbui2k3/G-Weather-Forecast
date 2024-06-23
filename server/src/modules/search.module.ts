import { Global, Module } from '@nestjs/common';
import { SearchController } from 'src/controllers/search.controller';
import { SearchService } from 'src/services/search.service';

@Global()
@Module({
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
