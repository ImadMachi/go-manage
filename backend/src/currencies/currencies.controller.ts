import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { CurrenciesService } from './currencies.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';



@Controller('currencies')
export class CurrenciesController {
  constructor(private currencyService: CurrenciesService) {}

  @Post()
  create(@Body() body: CreateCurrencyDto) {
    return this.currencyService.create(body);
  }

  @Get('/id/:id')
  findByCurrency(id: number) {
    return this.currencyService.findByCurrency(id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCurrencyDto) {
    return this.currencyService.update(id, body);
  }

  @Delete('/id/:id')
  deleteUser(@Param('id') id: number) {
    return this.currencyService.deleteCurrency(id);
}
}
