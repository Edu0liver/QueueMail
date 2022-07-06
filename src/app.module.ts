import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ModulesModule, SharedModule, ConfigModule.forRoot()],
})
export class AppModule {}
