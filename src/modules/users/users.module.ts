import { LibBullModule } from './../../shared/queue/bull/lib-bull.module';
import { CreateUserService } from './services/CreateUserService.service';
import { UserRepository } from './repositories/UserRepository';
import { CreateUserController } from './controllers/CreateUserController';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/database.module';

@Module({
  imports: [LibBullModule, DatabaseModule],
  providers: [UserRepository, CreateUserService],
  controllers: [CreateUserController],
  exports: [UserRepository],
})
export class UsersModule {}
