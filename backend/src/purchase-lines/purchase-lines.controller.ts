import { Controller, Get } from '@nestjs/common';
import { PurchaseLinesService } from './purchase-lines.service';

@Controller('purchaseLines')
export class PurchaseLinesController {
  constructor(private purchaseLineService: PurchaseLinesService) {}
  @Get()
  findByOrder(orderId: number) {
    return this.purchaseLineService.findByPurchase(orderId);
  }
}

