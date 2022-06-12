import { Module } from '@nestjs/common';
import { OrderFormsService } from './order-forms.service';
import { OrderFormsController } from './order-forms.controller';
import { OrdersModule } from 'src/order/orders.module';

@Module({
  imports: [OrdersModule],
  providers: [OrderFormsService],
  controllers: [OrderFormsController],
})
export class OrderFormsModule {}
