import { Body, Controller, Get, Param, Res } from '@nestjs/common';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get('/orderId/:orderId')
  async create(@Param('orderId') orderId, @Res() res) {
    const doc = await this.billsService.create(+orderId);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=bill.pdf',
      'Content-Length': doc.length,
    });
    res.end(doc);
  }
}
