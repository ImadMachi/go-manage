import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get()
  @Public()
  async create(@Body() payload, @Res() res) {
    const doc = await this.billsService.create(31);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': doc.length,
    });
    res.end(doc);
  }
}
