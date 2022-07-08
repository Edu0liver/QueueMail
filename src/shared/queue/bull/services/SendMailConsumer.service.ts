import { CreateUserDTO } from './../../../../modules/users/dtos/CreateUserDTO';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailerService } from '@nestjs-modules/mailer';

@Processor('sendMail-queue')
export class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job<CreateUserDTO>) {
    const { data } = job;

    await this.mailService.sendMail({
      to: data.email,
      from: 'Some person',
      subject: 'A queue test :)',
      text: `Hello ${data.name}`,
    });
  }
}
