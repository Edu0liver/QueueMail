import { SendMailProducerService } from './../../../shared/queue/bull/services/SendMailProducerService.service';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserRepository } from '../repositories/UserRepository';

@Injectable()
export class CreateUserService {
  constructor(
    private userRepository: UserRepository,
    private sendMailProducerService: SendMailProducerService,
  ) {}

  async createUser(data: CreateUserDTO): Promise<void> {
    const user = await this.userRepository.findByEmail(data.email);

    if (user) {
      throw new HttpException('The user already exists!', 400);
    }

    try {
      await this.userRepository.createUser(data);
      await this.sendMailProducerService.sendMail(data);
    } catch {
      throw new HttpException('Sign-up failed!', 400);
    }
  }
}
