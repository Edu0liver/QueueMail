import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma/services/prisma.service';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: CreateUserDTO): Promise<void> {
    await this.prismaService.user.create({ data });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { email: email },
    });
  }
}
