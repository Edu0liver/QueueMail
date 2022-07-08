import { LibBullModule } from './../../shared/queue/bull/lib-bull.module';
import { CreateUserService } from './services/CreateUserService.service';
import { UserRepository } from './repositories/UserRepository';
import { CreateUserController } from './controllers/CreateUserController';
import { PrismaService } from './../../shared/database/prisma/services/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [LibBullModule],
  providers: [UserRepository, CreateUserService, PrismaService],
  controllers: [CreateUserController],
  exports: [UserRepository],
})
export class UsersModule {}
