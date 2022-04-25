import { BadRequestException, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(@InjectRepository(Customer) private repo: Repository<Customer>, private userService: UsersService) {}

  async create(customerDto: CreateCustomerDto, email: string) {
    const customers = await this.repo.find({ reference: customerDto.reference });
    if (customers.length) {
      throw new BadRequestException('Cet reference est déjà utilisée');
    }
    const user = await this.userService.findByEmail(email);
    const customer = this.repo.create(customerDto);
    customer.user = user;
    return this.repo.save(customer);
  }

  async findOne(id: number, userId: number) {
    const customer = await this.repo.findOne({ id, userId });
    if (!customer) {
      throw new NotFoundException('Client non trouvé');
    }
    return customer;
  }

  async update(id: number, attrs: Partial<Customer>, userId: number) {
    const customer = await this.repo.findOne({ id, userId });
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    Object.assign(customer, attrs);
    return this.repo.save(customer);
  }

  async toggleIsActive(id: number, userId: number) {
    const customer = await this.repo.findOne({ id, userId });
    if (!customer) {
      throw new NotFoundException('utilisateur non trouvé');
    }
    customer.isActive = !customer.isActive;
    return this.repo.save(customer);
  }
}
