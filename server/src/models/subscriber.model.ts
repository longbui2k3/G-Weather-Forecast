import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

const COLLECTION_NAME = 'subscribers';
export type SubscriberDocument = HydratedDocument<Subscriber>;

@Schema({ timestamps: true, collection: COLLECTION_NAME })
export class Subscriber {
  @Prop({
    type: String,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
    enum: ['unconfirmed', 'confirmed'],
    default: 'unconfirmed',
  })
  status: string;

  @Prop({
    type: String,
  })
  token: string;
}
export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
SubscriberSchema.index({ expiredAt: 1 }, { expireAfterSeconds: 0 });
