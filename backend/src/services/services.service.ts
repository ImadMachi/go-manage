import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Action } from 'src/auth/enums/action.enum';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-Service.dto';
import { UsersService } from 'src/users/users.service';
import { Service } from './Services.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service) private repo: Repository<Service>,
    private caslAbilityFactory: CaslAbilityFactory,
    private usersService: UsersService,
  ) {}

  async create(serviceDto: CreateServiceDto, email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('utilisateur non trouve');
    }
    const service = this.repo.create(serviceDto);
    service.user = user;
    return this.repo.save(service);
  }

  async findAll(userId: number) {
    const services = await this.repo.find({ userId });
    return services;
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

    return service;
  }

  async update(id: number, attrs: Partial<Service>, user: Partial<User>) {
    const service = await this.repo.findOne(id);
    if (!service) {
      throw new NotFoundException('Service not found');
    }
    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Update, service)) {
      throw new ForbiddenException('Forbidden');
    }

    Object.assign(service, attrs);
    return this.repo.save(service);
  }
}