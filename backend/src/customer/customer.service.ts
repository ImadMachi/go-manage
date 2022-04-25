import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Action } from 'src/auth/enums/action.enum';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private repo: Repository<Customer>,
    private usersService: UsersService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async create(customerDto: CreateCustomerDto, email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('utilisateur non trouvé');
    }
    const customer = this.repo.create(customerDto);
    customer.user = user;
    const currDate = new Date().getTime();
    customer.creationDate = currDate;
    return this.repo.save(customer);
  }

  async findOne(id: number, user: Partial<User>) {
    const customer = await this.repo.findOne(id);
    if (!customer) {
      throw new NotFoundException('customer not found');
    }

    // checkAbility(user, Action.Read, customer);

    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Read, customer)) {
      throw new ForbiddenException('Forbidden');
    }

    return customer;
  }

  async update(id: number, attrs: Partial<Customer>, user: Partial<User>) {
    const customer = await this.repo.findOne(id);
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Update, customer)) {
      throw new ForbiddenException('Forbidden');
    }

    Object.assign(customer, attrs);
    return this.repo.save(customer);
  }
}
