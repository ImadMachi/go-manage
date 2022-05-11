import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() body: CreateOrderDto, @Request() request) {
    return this.ordersService.create(body, request.user);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('/customer/:customerId')
  findByCustomer(@Param('customerId') customerId: number) {
    return this.ordersService.findByCustomer(customerId);
  }
  // @Get('/id/:id')
  // findOne(id: number) {
  //   return this.orderService.findOne(id);
  // }

  // @Patch('/:id')
  // update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateOrderDto) {
  //   return this.orderService.update(id, body);
  // }

  // @Delete('/id/:id')
  // deleteUser(@Param('id') id: number) {
  //   return this.orderService.deleteOrder(id);
  // }
}
