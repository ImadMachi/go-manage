import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { PackService } from './pack.service';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';

@Controller('pack')
export class PackController {
  constructor(private packService: PackService) {}

  @Post()
  create(@Body() pack: CreatePackDto) {
    return this.packService.create(pack);
  }

  @Get('/id/:id')
  findByPack(@Param('id') id: number) {
    return this.packService.findByPack(id);
  }

  @Delete('/id/:id')
  deleteUser(@Param('id') id: number) {
    return this.packService.deletePack(id);
  }
  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() pack: UpdatePackDto) {
    return this.packService.update(id, pack);
  }
}
