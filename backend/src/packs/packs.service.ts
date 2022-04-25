import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';
import { Pack } from './pack.entity';

@Injectable()
export class PacksService {
  constructor(@InjectRepository(Pack) private repo: Repository<Pack>, private usersService: UsersService) {}

  async create(packDTO: CreatePackDto, email: string) {
    const user = await this.usersService.findByEmail(email);
    const pack = this.repo.create(packDTO);
    pack.user = user;
    return this.repo.save(pack);
  }

  async findOne(id: number) {
    const pack = await this.repo.findOne(id);
    if (!pack) {
      throw new NotFoundException('pack non trouvé');
    }
    return pack;
  }

  async deleteOne(id: number) {
    const pack = await this.findOne(id);
    return this.repo.remove(pack);
  }

  async update(id: number, attrs: Partial<UpdatePackDto>) {
    const pack = await this.findOne(id);
    Object.assign(pack, attrs);
    return this.repo.save(pack);
  }
}
