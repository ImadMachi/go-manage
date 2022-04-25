import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { PoliciesGuard } from 'src/auth/guards/policy.guard';
import { CheckPolicies } from 'src/casl/decorators/policy.decorator';
import { ManagePackPolicyHandler } from 'src/casl/handlers/packs.handler';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreatePackDto } from './dto/create-pack.dto';
import { PackDto } from './dto/pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';
import { PacksService } from './packs.service';

@Serialize(PackDto)
@Controller('packs')
export class PacksController {
  constructor(private packsService: PacksService) {}

  @Post()
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ManagePackPolicyHandler())
  create(@Body() pack: CreatePackDto, @Request() request) {
    return this.packsService.create(pack, request.user.email);
  }

  @Get('/:id')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ManagePackPolicyHandler())
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.packsService.findOne(id);
  }

  @Delete('/userId/:userId')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ManagePackPolicyHandler())
  deleteByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.packsService.deleteByUser(userId);
  }

  @Delete('/:id')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ManagePackPolicyHandler())
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.packsService.deleteOne(id);
  }

  @Patch('/:id')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ManagePackPolicyHandler())
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePackDto) {
    return this.packsService.update(id, body);
  }
}
