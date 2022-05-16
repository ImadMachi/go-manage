import { BadRequestException, HttpException, Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/order/order.entity';
import { Product } from 'src/products/product.entity';
import { QueryBuilder, Repository } from 'typeorm';
import { OrderLine } from './orderLine.entity';

@Injectable()
export class OrderLinesService {
  constructor(@InjectRepository(OrderLine) private repo: Repository<OrderLine>) {}
  async create(product: Product, order: Order, qty: number) {
    const orderLine = this.repo.create({ qty });
    orderLine.product = product;
    orderLine.order = order;
    return this.repo.save(orderLine);
  }

  // async findOne(id: number) {
  //   const orderLine = await this.repo.findOne(id);
  //   if (!orderLine) {
  //     throw new NotFoundException('orderline not found');
  //   }
  //   return orderLine;
  // }
  findByOrder(orderId:number){
    return this.repo
    .createQueryBuilder('orderLine')
    .where('orderId=orderId',{orderId})
    .leftJoinAndSelect('orderLine.product', 'product')
    .select(['orderLine.qty','product.image','product.price','product.title'])
    .getMany();
    
  }

  
  // async deleteOrderLine(id: number) {
  //   const orderline = await this.repo.findOne({ id });
  //   if (!orderline) {
  //     throw new NotFoundException('orderline not found');
  //   }
  //   return this.repo.remove(orderline);
  // }

  // async update(id: number, attrs: Partial<UpdateOrdeLineDto>) {
  //   const orderline = await this.repo.findOne({ id });
  //   if (!orderline) {
  //     throw new NotFoundException('orderline not found');
  //   }
  //   Object.assign(orderline, attrs);
  //   return this.repo.save(orderline);
  // }
}
