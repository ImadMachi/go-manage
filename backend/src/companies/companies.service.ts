import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dtos/create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(@InjectRepository(Company) private repo: Repository<Company>) {}

  async create(companyDto: CreateCompanyDto) {
    const companies = await this.repo.find({ email: companyDto.email });
    if (companies.length) {
      throw new BadRequestException('Cet email est déjà utilisée');
    }
    const company = this.repo.create(companyDto);
    return this.repo.save(company);
  }

  async findByEmail(email: string) {
    const company = await this.repo.findOne({ email });
    if (!company) {
      throw new NotFoundException('company not found');
    }
    return company;
  }

  async update(id: number, attrs: Partial<Company>) {
    const company = await this.repo.findOne(id);
    if (!company) {
      throw new NotFoundException('company not found');
    }
    Object.assign(company, attrs);
    return this.repo.save(company);
  }
}
