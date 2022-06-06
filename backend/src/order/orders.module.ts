import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { ProductsModule } from 'src/products/products.module';
import { OrderLinesModule } from 'src/order-lines/orderLines.module';
import { StocksModule } from 'src/stocks/stocks.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), CustomerModule, ProductsModule, OrderLinesModule, StocksModule],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}
