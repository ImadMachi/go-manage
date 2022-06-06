import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';

import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PurchaseDto } from './dto/purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchasesService } from './purchase.service';

@Serialize(PurchaseDto)
@Controller('purchase')
export class PurchasesController {
  constructor(private purchaseService: PurchasesService) {}

  @Post()
  create(@Body() body: CreatePurchaseDto, @Request() request) {
    return this.purchaseService.create(body, request.user);
  }

  @Get()
  findAll(@Request() request) {
    return this.purchaseService.findAll(request.user.id);
  }

  // @Get('/id/:id')
  // findOne(id: number) {
  //   return this.orderService.findOne(id);
  // }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePurchaseDto) {
    return this.purchaseService.update(id, body);
  }

  @Delete('/:id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseService.deleteOne(id);
  }
}
