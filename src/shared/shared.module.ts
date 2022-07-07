import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProvidersModule } from './providers/providers.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [DatabaseModule, ProvidersModule, QueueModule]
})
export class SharedModule {}
