import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Action } from 'src/auth/enums/action.enum';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './Services.entity';

@Injectable()
export class ServicesService {
  constructor(@InjectRepository(Service) private repo: Repository<Service>, private caslAbilityFactory: CaslAbilityFactory) {}

  async create(serviceDto: CreateServiceDto) {
    const Service = this.repo.create(serviceDto);

    return this.repo.save(Service);
  }

  async findAll(userId: number) {
    const customers = await this.repo.find({ userId });
    return customers;
  }

  async findOne(id: number, user: Partial<User>) {
    const service = await this.repo.findOne(id);
    if (!service) {
      throw new NotFoundException('produit non trouvé');
    }

    // checkAbility(user, Action.Read, Service);

    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Read, service)) {
      throw new ForbiddenException('Forbidden');
    }

    return Service;
  }

  async update(id: number, attrs: Partial<Service>, user: Partial<User>) {
    const Service = await this.repo.findOne(id);
    if (!Service) {
      throw new NotFoundException('Service not found');
    }
    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Update, Service)) {
      throw new ForbiddenException('Forbidden');
    }

    Object.assign(Service, attrs);
    return this.repo.save(Service);
  }
}
