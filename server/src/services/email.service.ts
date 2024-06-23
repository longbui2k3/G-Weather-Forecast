import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber } from '../models/subscriber.model';
import { Email } from '../utils/email';
import * as crypto from 'crypto';
@Injectable()
export class EmailService {
  constructor(
    @InjectModel('Subscriber') private subscriberModel: Model<Subscriber>,
  ) {}
  async sendEmail(email: string) {
    const token = crypto.randomBytes(32).toString('hex');
    const hashToken = crypto.createHash('sha256').update(token).digest('hex');

    await this.subscriberModel.findOneAndUpdate(
      { email },
      { token: hashToken },
      { new: true, upsert: true },
    );

    await new Email({ email, token }).sendEmail();
    return {
      message: 'Your email has been sent! Please check your email!',
    };
  }

  async confirmEmail(token: string) {
    const hashToken = crypto.createHash('sha256').update(token).digest('hex');
    const subscriber = await this.subscriberModel.findOne({ token: hashToken });
    if (!subscriber) {
      throw new BadRequestException('Token is invalid!');
    }
    subscriber.status = 'confirmed';
    subscriber.token = undefined;
    await subscriber.save();

    return {
      message: 'Confirm email successfully!',
      subscriber,
    };
  }

  async unsubscribeEmail(token: string) {
    const hashToken = crypto.createHash('sha256').update(token).digest('hex');
    const subscriber = await this.subscriberModel.findOne({ token: hashToken });
    if (!subscriber) {
      throw new BadRequestException('Token is invalid!');
    }

    await this.subscriberModel.findOneAndDelete({ token: hashToken });

    return {
      message: 'Unsubscribe email successfully!',
    };
  }
}
