import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CompaniesService {
  constructor(@InjectRepository(Customer) private repo: Repository<Customer>) {}

  async create(customerDto: CreateCustomerDto) {
    const companies = await this.repo.find({ id: customerDto.id });
    if (companies.length) {
      throw new BadRequestException('Cet email est déjà utilisée');
    }
    const customer = this.repo.create(customerDto);
    return this.repo.save(customer);
  }

  async findByCustomer(id: number) {
    const customer = await this.repo.findOne({ id });
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    return customer;
  }

  async update(id: number, attrs: Partial<Customer>) {
    const customer = await this.repo.findOne(id);
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    Object.assign(customer, attrs);
    return this.repo.save(customer);
  }
}

