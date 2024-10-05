import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Request, Res, UploadedFile, UseInterceptors } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/decorators/public.decorator';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';

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

  @Post('/images')
  @Public()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/images',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadImage(@UploadedFile() file) {
    if (!file) {
      return 'No file';
    }
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response.filename;
  }

  @Get('/images/:filename')
  @Public()
  seeUploadedFile(@Param('filename') filename, @Res() res) {
    return res.sendFile(filename, { root: './public/images' });
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProductDto, @Request() request) {
    return this.productsService.update(id, body, request.user);
  }
}
