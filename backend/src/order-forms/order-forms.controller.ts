import { Body, Controller, Get, Param, Res } from '@nestjs/common';
import { OrderFormsService } from './order-forms.service';

@Controller('order-forms')
export class OrderFormsController {
  constructor(private orderFormsService: OrderFormsService) {}

  @Get('/orderId/:orderId')
  async create(@Param('orderId') orderId, @Res() res) {
    const doc = await this.orderFormsService.create(+orderId);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=order-form.pdf',
      'Content-Length': doc.length,
    });
    res.end(doc);
  }
}
