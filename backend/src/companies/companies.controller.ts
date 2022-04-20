import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CompaniesService } from './companies.service';
import { CompanyDto } from './dtos/company.dto';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { UpdateCompanyDto } from './dtos/update-company.dto';

@Serialize(CompanyDto)
@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Post()
  create(@Body() body: CreateCompanyDto) {
    return this.companiesService.create(body);
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get('/:email')
  findByEmail(@Param('email') email: string) {
    return this.companiesService.findByEmail(email);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCompanyDto) {
    return this.companiesService.update(id, body);
  }

  @Get('/toggle-active/:id')
  toggleIsActive(@Param('id', ParseIntPipe) id: number) {
    return this.companiesService.toggleIsActive(id);
  }
}
