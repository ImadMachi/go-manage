import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';
import { request } from 'http';
import { Serialize } from 'src/interceptors/serialize.interceptor';

import { CreateSupplierDto } from './dto/create-supplier.dto';
import { SupplierDto } from './dto/supplier.Dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SuppliersService } from './suppliers.service';


@Serialize(SupplierDto)
@Controller('suppliers')
export class SuppliersController {
  constructor(private supplierService: SuppliersService) {}

  @Post()
  create(@Body() body: CreateSupplierDto, @Request() request) {
    return this.supplierService.create(body, request.user.email);
  }

  @Get()
  findAll(@Request() request) {
    return this.supplierService.findAll(request.user.id);
  }

  @Get('/:id')
  findOne(@Param('id') id: number, @Request() request) {
    return this.supplierService.findOne(id, request.user);
  }

  // @Get('/:id')
  // findBy(@Param('id') id: number) {
  //   return this.supplierService.findOne(id);
  // }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateSupplierDto, @Request() request) {
    return this.supplierService.update(id, body, request.user);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number, @Request() request) {
    return this.supplierService.delete(id, request.user);
  }
}
