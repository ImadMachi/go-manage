import { Module } from '@nestjs/common';
import { ShippingsService } from './shippings.service';
import { ShippingsController } from './shippings.controller';
import { Shipping } from './shipping.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from 'src/order/orders.module';

@Module({
  imports: [TypeOrmModule.forFeature([Shipping]), OrdersModule],

  providers: [ShippingsService],
  controllers: [ShippingsController]
})
export class ShippingsModule {}
