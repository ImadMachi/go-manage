import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(userDto: CreateUserDto) {
    const user = this.repo.create(userDto);
    return this.repo.save(user);
  }

  async getProfile(email: string) {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new NotFoundException('utilisateur non trouvé');
    }
    return user;
  }

  async updateProfile(email: string, attrs: Partial<User>) {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new NotFoundException('utilisateur non trouvé');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async toggleIsActive(email: string) {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new NotFoundException('utilisateur non trouvé');
    }
    user.isActive = !user.isActive;
    return this.repo.save(user);
  }

  findAll() {
    return this.repo.find();
  }

  find(payload: Partial<UserDto>) {
    return this.repo.find(payload);
  }
}
