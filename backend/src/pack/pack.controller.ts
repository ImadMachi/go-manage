import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';

import { PackService } from './pack.service';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';
import { PoliciesGuard } from 'src/auth/guards/policy.guard';
import { ReadPackPolicyHandler } from 'src/casl/handlers/packs.handler';
import { CheckPolicies } from 'src/casl/decorators/policy.decorator';

@Controller('pack')
export class PackController {
  constructor(private packService: PackService) {}

  @Post()
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ReadPackPolicyHandler())
  create(@Body() pack: CreatePackDto) {
    return this.packService.create(pack);
  }

  @Get('/id/:id')
  findByCompte(@Param('id') id: number) {
    return this.packService.findByPack(id);
  }

  @Delete('/id/:id')
  deleteUser(@Param('id') id: number) {
    return this.packService.deletePack(id);
  }
  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePackDto) {
    return this.packService.updatePack(id, body);
  }
}
