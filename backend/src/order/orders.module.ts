import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { ProductsModule } from 'src/products/products.module';
import { OrderLinesModule } from 'src/order-lines/orderLines.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), CustomerModule, ProductsModule, OrderLinesModule],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}
