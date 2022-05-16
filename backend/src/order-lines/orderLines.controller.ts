import { Controller, Get } from '@nestjs/common';
import { OrderLinesService } from './orderLines.service';

@Controller('orderLines')
export class OrderLinesController {
  constructor(private orderLinesService: OrderLinesService) {}
  @Get()
  findByOrder(orderId: number) {
    return this.orderLinesService.findByOrder(orderId);
  }
}
