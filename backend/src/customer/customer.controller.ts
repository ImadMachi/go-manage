import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';
import { request } from 'http';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerDto } from './dto/customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Serialize(CustomerDto)
@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  create(@Body() body: CreateCustomerDto, @Request() request) {
    return this.customerService.create(body, request.user.email);
  }

  @Get()
  findAll(@Request() request) {
    return this.customerService.findAll(request.user.id);
  }

  @Get('/:id')
  findOne(@Param('id') id: number, @Request() request) {
    return this.customerService.findOne(id, request.user);
  }

  // @Get('/:id')
  // findBy(@Param('id') id: number) {
  //   return this.customerService.findOne(id);
  // }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCustomerDto, @Request() request) {
    return this.customerService.update(id, body, request.user);
  }
}
