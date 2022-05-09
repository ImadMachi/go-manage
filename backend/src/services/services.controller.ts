import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateServiceDto } from './dto/create-service.dto';
import { ServiceDto } from './dto/service.dto';
import { UpdateServiceDto } from './dto/update-product.dto';
import { ServicesService } from './services.service';


@Serialize(ServiceDto)
@Controller('Services')
export class ServicesController {
  constructor(private servicesService:  ServicesService) {}

  @Post()
  create(@Body() body: CreateServiceDto) {
    return this. servicesService.create(body);
  }

  @Get()
  findAll(@Request() request) {
    return this.servicesService.findAll(request.user.id);
  }

  @Get('/:id')
  findOne(@Param('id') id: number, @Request() request) {
    return this. servicesService.findOne(id, request.user);
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


