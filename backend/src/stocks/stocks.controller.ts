import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Request } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { StockDto } from './dto/stockDto';

@Serialize(StockDto)
@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  create(@Query('productId', ParseIntPipe) productId: number, @Body() createStockDto: CreateStockDto, @Request() request) {
    return this.stocksService.create(productId, createStockDto, request.user);
  }

  @Get()
  findAll() {
    return this.stocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.stocksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stocksService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stocksService.remove(+id);
  }
}
