import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';
import { Pack } from './pack.entity';

@Injectable()
export class PackService {
  constructor(@InjectRepository(Pack) private repo: Repository<Pack>) {}
  async create(packDto: CreatePackDto) {
    const pack = this.repo.create(packDto);
    return this.repo.save(pack);
  }

  async findByPack(id: number) {
    const pack = await this.repo.findOne(id);
    if (!pack) {
      throw new NotFoundException('pack not found');
    }
    return pack;
  }

  async deletePack(id: number) {
    const pack = await this.repo.findOne({ id });
    if (!pack) {
      throw new NotFoundException('pack not found');
    }
    return this.repo.remove(pack);
  }

  async update(id: number, attrs: Partial<UpdatePackDto>) {
    const pack = await this.repo.findOne({ id });
    if (!pack) {
      throw new NotFoundException('pack not found');
    }
    Object.assign(pack, attrs);
    return this.repo.save(pack);
  }
}
