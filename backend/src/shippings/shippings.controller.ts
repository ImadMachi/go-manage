import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { ShippingsService } from './shippings.service';




@Controller('shippings')
export class ShippingsController {
  constructor(private shippingService: ShippingsService) {}

  @Post()
  create(@Body() body: CreateShippingDto) {
    return this.shippingService.create(body);
  }

  @Get('/id/:id')
  findByShipping(id: number) {
    return this.shippingService.findByShipping(id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateShippingDto) {
    return this.shippingService.update(id, body);
  }

  @Delete('/id/:id')
  deleteUser(@Param('id') id: number) {
    return this.shippingService.deleteShipping(id);
}
}

