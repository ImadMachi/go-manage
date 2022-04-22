import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './order.entity';


@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) {}
  async create(orderDto: CreateOrderDto) {
    const companies = await this.repo.find({ reference: orderDto.reference});
    if (companies.length) {
      throw new BadRequestException('Cet communde est déjà utilisée');
    }
    const order = this.repo.create(orderDto);
    return this.repo.save(order);
  }

  async findByOrder(id: number) {
    const order = await this.repo.findOne(id);
    if (!order) {
      throw new NotFoundException('order not found');
    }
    return order;
  }

  async deleteOrder(id: number) {
    const order = await this.repo.findOne({ id });
    if (!order) {
      throw new NotFoundException('order not found');
    }
    return this.repo.remove(order);
  }

  async update(id: number, attrs: Partial<UpdateOrderDto>) {
    const order = await this.repo.findOne({ id });
    if (!order) {
      throw new NotFoundException('order not found');
    }
    Object.assign(order, attrs);
    return this.repo.save(order);
  }
}

