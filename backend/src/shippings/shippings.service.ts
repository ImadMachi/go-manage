import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipping } from './shipping.entity';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';



@Injectable()
export class ShippingsService {
  constructor(@InjectRepository(Shipping) private repo: Repository<Shipping>) {}
  async create(ShippingDto: CreateShippingDto) {
    const companies = await this.repo.find({ reference: ShippingDto.reference});
    if (companies.length) {
      throw new BadRequestException('Cet livraison est déjà utilisée');
    }
    const Shipping = this.repo.create(ShippingDto);
    return this.repo.save(Shipping);
  }

  async findByShipping(id: number) {
    const Shipping = await this.repo.findOne(id);
    if (!Shipping) {
      throw new NotFoundException('Shipping not found');
    }
    return Shipping;
  }

  async deleteShipping(id: number) {
    const Shipping = await this.repo.findOne({ id });
    if (!Shipping) {
      throw new NotFoundException('Shipping not found');
    }
    return this.repo.remove(Shipping);
  }

  async update(id: number, attrs: Partial<UpdateShippingDto>) {
    const Shipping = await this.repo.findOne({ id });
    if (!Shipping) {
      throw new NotFoundException('Shipping not found');
    }
    Object.assign(Shipping, attrs);
    return this.repo.save(Shipping);
  }
}

