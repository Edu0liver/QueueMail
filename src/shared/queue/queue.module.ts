import { Module } from '@nestjs/common';
import { LibBullModule } from './bull/lib-bull.module';

@Module({
  imports: [LibBullModule],
})
export class QueueModule {}
