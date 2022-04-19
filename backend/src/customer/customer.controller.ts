import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CompaniesService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private customerService: CompaniesService) {}

  @Post()
  create(@Body() body: CreateCustomerDto) {
    return this.customerService.create(body);
  }

  @Get()
  findByCustomer(@Param('id') id: number) {
    return this.customerService.findByCustomer(id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCustomerDto) {
    return this.customerService.update(id, body);
  }
}
