import { Controller, Get, Param, Res } from '@nestjs/common';
import { ShippingsService } from './shippings.service';

@Controller('shippings')
export class ShippingsController {
  constructor(private shippingsService: ShippingsService) {}

  @Get('/orderId/:orderId')
  async create(@Param('orderId') orderId, @Res() res) {
    const doc = await this.shippingsService.create(+orderId);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=shipping.pdf',
      'Content-Length': doc.length,
    });
    res.end(doc);
  }
}
