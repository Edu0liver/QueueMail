import { CreateUserDTO } from './../../../../modules/users/dtos/CreateUserDTO';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class SendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

  async sendMail(data: CreateUserDTO) {
    await this.queue.add('sendMail-job', data);
  }
}
