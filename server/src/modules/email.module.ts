import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailController } from 'src/controllers/email.controller';
import { SubscriberSchema } from 'src/models/subscriber.model';
import { EmailService } from 'src/services/email.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subscriber', schema: SubscriberSchema },
    ]),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
