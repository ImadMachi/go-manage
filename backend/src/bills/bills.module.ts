import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { Bill } from './bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from 'src/order/orders.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bill]), OrdersModule],
  providers: [BillsService],
  controllers: [BillsController],
})
export class BillsModule {}
