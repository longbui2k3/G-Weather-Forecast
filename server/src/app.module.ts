import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SearchModule } from './modules/search.module';
import { MongoModule } from './modules/mongo.module';
import { HistoryModule } from './modules/history.module';
import { EmailModule } from './modules/email.module';

@Module({
  imports: [MongoModule.forRootAsync(), SearchModule, HistoryModule, EmailModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
