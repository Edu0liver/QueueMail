import { Module } from '@nestjs/common';
import { NodemailerModule } from './nodemailer/nodemailer.module';

@Module({
  imports: [NodemailerModule]
})
export class MailsModule {}
