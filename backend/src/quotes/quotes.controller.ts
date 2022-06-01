import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, Res } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { CreateQuoteDto } from './dto/create-quote.dto';

import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get('/print')
  @Public()
  async print(@Body() payload, @Res() res, @Request() request) {
    const doc = await this.quotesService.print(34, request.user);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': doc.length,
    });
    res.end(doc);
  }

  @Post()
  create(@Body() body: CreateQuoteDto, @Request() request) {
    return this.quotesService.create(body, request.user);
  }

  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.quotesService.delete(id);
  }
}
