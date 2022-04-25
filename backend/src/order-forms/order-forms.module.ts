import { Module } from '@nestjs/common';
import { OrderFormsService } from './order-forms.service';
import { OrderFormsController } from './order-forms.controller';

@Module({
  providers: [OrderFormsService],
  controllers: [OrderFormsController]
})
export class OrderFormsModule {}
