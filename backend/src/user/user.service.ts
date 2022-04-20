import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(userDto: CreateUserDto) {
    const companies = await this.repo.find({ email: userDto.email });
    if (companies.length) {
      throw new BadRequestException('Cet email est déjà utilisée');
    }
    const company = this.repo.create(userDto);
    return this.repo.save(company);
  }

  async findByUser(email: string) {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  

  async updateUser(id: number, attrs: Partial<User>) {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }
}
