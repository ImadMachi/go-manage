import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';


@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  create(@Body() body: CreateOrderDto) {
    return this.orderService.create(body);
  }

  @Get('/id/:id')
  findByOrder(id: number) {
    return this.orderService.findByOrder(id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateOrderDto) {
    return this.orderService.update(id, body);
  }

  @Delete('/id/:id')
  deleteUser(@Param('id') id: number) {
    return this.orderService.deleteOrder(id);
}
}
