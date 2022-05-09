import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Request } from '@nestjs/common';

import { CreateProductDto } from './dto/create-Product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Serialize(ProductDto)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(@Body() body: CreateProductDto, @Request() request) {
    return this.productsService.create(body, request.user.email);
  }

  @Get()
  findAll(@Request() request) {
    return this.productsService.findAll(request.user.id);
  }

  @Get('/:id')
  findOne(@Param('id') id: number, @Request() request) {
    return this.productsService.findOne(id, request.user);
  }

  // @Get('/:id')
  // findBy(@Param('id') id: number) {
  //   return this.customerService.findOne(id);
  // }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProductDto, @Request() request) {
    return this.productsService.update(id, body, request.user);
  }
}
