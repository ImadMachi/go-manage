import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateOrderLineDto } from './dto/create-orderLine.dto';
import { UpdateOrderLineDto } from './dto/update-orderLine.dto';
import { OrderLinesService } from './order-lines.service';



@Controller('orderlines')
export class OrderLinesController {
  constructor(private orderService: OrderLinesService) {}

  @Post()
  create(@Body() body: CreateOrderLineDto) {
    return this.orderService.create(body);
  }

  @Get('/id/:id')
  findByOrder(id: number) {
    return this.orderService.findByOrderLine(id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateOrderLineDto) {
    return this.orderService.update(id, body);
  }

  @Delete('/id/:id')
  deleteUser(@Param('id') id: number) {
    return this.orderService.deleteOrderLine(id);
}
}