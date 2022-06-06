import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseLinesService } from './purchase-lines.service';
import { CreatePurchaseLineDto } from './dto/create-purchase-line.dto';
import { UpdatePurchaseLineDto } from './dto/update-purchase-line.dto';

@Controller('purchase-lines')
export class PurchaseLinesController {
  constructor(private readonly purchaseLinesService: PurchaseLinesService) {}

  @Post()
  create(@Body() createPurchaseLineDto: CreatePurchaseLineDto) {
    return this.purchaseLinesService.create(createPurchaseLineDto);
  }

  @Get()
  findAll() {
    return this.purchaseLinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseLinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseLineDto: UpdatePurchaseLineDto) {
    return this.purchaseLinesService.update(+id, updatePurchaseLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseLinesService.remove(+id);
  }
}
