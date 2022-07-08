import { ConfigModule } from '@nestjs/config';
import { SendMailConsumer } from './services/SendMailConsumer.service';
import { NodemailerModule } from '../../providers/mails/nodemailer/nodemailer.module';
import { SendMailProducerService } from './services/SendMailProducerService.service';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.registerQueueAsync({
      name: 'sendMail-queue',
    }),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    NodemailerModule,
  ],
  providers: [SendMailProducerService, SendMailConsumer],
  exports: [SendMailProducerService, SendMailConsumer],
})
export class LibBullModule {}
