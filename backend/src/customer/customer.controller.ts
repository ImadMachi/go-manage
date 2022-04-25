import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { PoliciesGuard } from 'src/auth/guards/policy.guard';
import { CheckPolicies } from 'src/casl/decorators/policy.decorator';
import { CreateCustomerPolicyHandler, ToggleIsActivePolicyHandler } from 'src/casl/handlers/customer.handler';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerDto } from './dto/customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Serialize(CustomerDto)
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new CreateCustomerPolicyHandler())
  create(@Body() body: CreateCustomerDto, @Request() request) {
    return this.customerService.create(body, request.user.email);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number, @Request() request) {
    return this.customerService.findOne(id, request.user.id);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCustomerDto, @Request() request) {
    return this.customerService.update(id, body, request.user.id);
  }

  @Get('/toggle-active/:id')
  toggleIsActive(@Param('id', ParseIntPipe) id: number, @Request() request) {
    return this.customerService.toggleIsActive(id, request.user.id);
  }
}
