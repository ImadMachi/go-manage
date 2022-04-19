import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(userDTO: CreateUserDto) {
    const user = this.repo.create(userDTO);
    if (this.findByUser(user.email)) {
      throw new HttpException('this email already taken', 409);
    }
    return this.repo.save(user);
  }

  async findByUser(email: string) {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async deleteUser(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }

  async updateUser(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.save(user);
  }
}
