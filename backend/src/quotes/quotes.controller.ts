import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, Res } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuoteDto } from './dto/quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuotesService } from './quotes.service';

@Serialize(QuoteDto)
@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get('/print/:id')
  async print(@Res() res, @Param('id') id, @Request() request) {
    const doc = await this.quotesService.print(+id, request.user);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=quote.pdf',
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

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateQuoteDto) {
    return this.quotesService.update(id, body);
  }
}
