import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';

import { CreateServiceDto } from './dto/create-Service.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

import { ServicesService } from './services.service';
import { ServiceDto } from './dto/service.dto';
import { UpdateServiceDto } from './dto/update-product.dto';

@Serialize(ServiceDto)
@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Post()
  create(@Body() body: CreateServiceDto, @Request() request) {
    return this.servicesService.create(body, request.user.email);
  }

  @Get()
  findAll(@Request() request) {
    return this.servicesService.findAll(request.user.id);
  }

  @Get('/:id')
  findOne(@Param('id') id: number, @Request() request) {
    return this.servicesService.findOne(id, request.user);
  }

  // @Get('/:id')
  // findBy(@Param('id') id: number) {
  //   return this.customerService.findOne(id);
  // }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateServiceDto, @Request() request) {
    return this.servicesService.update(id, body, request.user);
  }
}
