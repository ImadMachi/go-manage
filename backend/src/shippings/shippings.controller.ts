import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { ShippingsService } from './shippings.service';

@Controller('shippings')
export class ShippingsController {
  constructor(private shippingsService: ShippingsService) {}

  @Get()
  @Public()
  async create(@Body() payload, @Res() res) {
    const doc = await this.shippingsService.create(1);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': doc.length,
    });
    res.end(doc);
  }
}
