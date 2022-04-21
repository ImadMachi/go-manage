import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreatePackDto } from './dto/create-pack.dto';
import { Pack } from './pack.entity';

@Injectable()
export class PackService {
  constructor(@InjectRepository(Pack) private repo: Repository<Pack>) {}

  create(packDTO: CreatePackDto) {
    const packs = this.repo.create(packDTO);
    return this.repo.save(packs);
  }

  async findByPack(id: number) {
    const pack = await this.repo.findOne({ id });
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

  async updatePack(id: number, attrs: Partial<Pack>) {
    const pack = await this.repo.findOne({ id });
    if (!pack) {
      throw new NotFoundException('pack not found');
    }
    Object.assign(pack, attrs);
    return this.repo.save(pack);
  }
}
