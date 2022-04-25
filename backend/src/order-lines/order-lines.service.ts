import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderLineDto } from './dto/create-orderLine.dto';
import { UpdateOrderLineDto } from './dto/update-orderLine.dto';


import { OrderLine } from './orderLine.entity';



@Injectable()
export class OrderLinesService {
  constructor(@InjectRepository(OrderLine) private repo: Repository<OrderLine>) {}
  async create(orderlineDto: CreateOrderLineDto) {
    const companies = await this.repo.find({ reference: orderlineDto.reference});
    if (companies.length) {
      throw new BadRequestException('Cet communde est déjà utilisée');
    }
    const orderline = this.repo.create(orderlineDto);
    return this.repo.save(orderline);
  }

  async findByOrderLine(id: number) {
    const orderline = await this.repo.findOne(id);
    if (!orderline) {
      throw new NotFoundException('orderline not found');
    }
    return orderline;
  }

  async deleteOrderLine(id: number) {
    const orderline = await this.repo.findOne({ id });
    if (!orderline) {
      throw new NotFoundException('orderline not found');
    }
    return this.repo.remove(orderline);
  }

  async update(id: number, attrs: Partial<UpdateOrderLineDto>) {
    const orderline = await this.repo.findOne({ id });
    if (!orderline) {
      throw new NotFoundException('orderline not found');
    }
    Object.assign(orderline, attrs);
    return this.repo.save(orderline);
  }
}



