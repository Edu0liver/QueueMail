import { Module } from '@nestjs/common';
import { BullModule } from './bull/bull.module';

@Module({
  imports: [BullModule]
})
export class QueueModule {}
