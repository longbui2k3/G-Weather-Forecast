import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoryController } from 'src/controllers/history.controller';
import { HistorySchema } from 'src/models/history.model';
import { HistoryService } from 'src/services/history.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'History', schema: HistorySchema }]),
  ],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
