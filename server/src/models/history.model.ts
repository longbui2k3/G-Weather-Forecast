import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

const COLLECTION_NAME = 'histories';
export type HistoryDocument = HydratedDocument<History>;

@Schema({ timestamps: true, collection: COLLECTION_NAME })
export class History {
  @Prop({
    type: {
      location: String,
      date: String,
      temperature: String,
      wind: String,
      humidity: String,
      condition: Object,
    },
  })
  weatherInfo: {
    location: string;
    date: string;
    temperature: string;
    wind: string;
    humidity: string;
    condition: Object;
  };
  @Prop({
    type: Date,
  })
  expiredAt: Date;
}
export const HistorySchema = SchemaFactory.createForClass(History);
HistorySchema.index({ expiredAt: 1 }, { expireAfterSeconds: 0 });
