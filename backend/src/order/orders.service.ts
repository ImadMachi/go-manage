import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { OrderLinesService } from 'src/order-lines/orderLines.service';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private repo: Repository<Order>,
    private customerService: CustomerService,
    private productsService: ProductsService,
    private orderLinesService: OrderLinesService,
  ) {}

  async create(orderDto: CreateOrderDto, user: Partial<User>) {
    const customer = await this.customerService.findOne(orderDto.customerId, user);

    const order = this.repo.create(orderDto);
    order.customer = customer;
    const currDate = new Date().getTime();
    order.date = currDate;
    await this.repo.save(order);

    // orderDto.products.forEach(async ({ id, qty }) => {
    //   const product = await this.productsService.findOne(id, user);
    //   await this.orderLinesService.create(product, order, qty);
    // });
    for (const item of orderDto.products) {
      const product = await this.productsService.findOne(item.id, user);
      await this.orderLinesService.create(product, order, item.qty);
    }

    return this.repo.save(order);
  }

  async findAll(customerId: number) {
    const orders = await this.repo.find({ customerId });
    if (!orders.length) {
      throw new NotFoundException('no orders found');
    }
    return orders;
  }

  // async findOne(id: number) {
  //   const order = await this.repo.findOne(id);
  //   if (!order) {
  //     throw new NotFoundException('order not found');
  //   }
  //   return order;
  // }

  // async delete(id: number) {
  //   const order = await this.repo.findOne({ id });
  //   if (!order) {
  //     throw new NotFoundException('order not found');
  //   }
  //   return this.repo.remove(order);
  // }

  async update(id: number, attrs: Partial<UpdateOrderDto>) {
    const order = await this.repo.findOne({ id });
    if (!order) {
      throw new NotFoundException('order not found');
    }
    Object.assign(order, attrs);
    return this.repo.save(order);
  }
}
