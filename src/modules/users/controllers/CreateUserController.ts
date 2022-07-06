import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { CreateUserService } from '../services/CreateUserService.service';

@Controller('user')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('create')
  async createUser(@Body() dto: CreateUserDTO): Promise<void> {
    return await this.createUserService.createUser(dto);
  }
}
