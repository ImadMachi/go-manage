import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Action } from 'src/auth/enums/action.enum';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { Supplier } from './supplier.entity';


@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier) private repo: Repository<Supplier>,
    private usersService: UsersService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async create(supplierrDto: CreateSupplierDto, email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('utilisateur non trouvé');
    }
    const supplierr = this.repo.create(supplierrDto);
    supplierr.user = user;
    const currDate = new Date().getTime();
    supplierr.creationDate = currDate;
    return this.repo.save(supplierr);
  }

  async findAll(userId: number) {
    const supplierrs = await this.repo.find({ userId, isDeleted: false });
    return supplierrs;
  }

  async findOne(id: number, user: Partial<User>) {
    const supplierr = await this.repo.findOne(id);
    if (!supplierr) {
      throw new NotFoundException('Client non trouvé');
    }

    // checkAbility(user, Action.Read, supplierr);

    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Read, supplierr)) {
      throw new ForbiddenException('Forbidden');
    }

    return supplierr;
  }

  async update(id: number, attrs: Partial<Supplier>, user: Partial<User>) {
    const supplierr = await this.repo.findOne(id);
    if (!supplierr) {
      throw new NotFoundException('supplierr not found');
    }
    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Update, supplierr)) {
      throw new ForbiddenException('Forbidden');
    }

    Object.assign(supplierr, attrs);
    return this.repo.save(supplierr);
  }

  async delete(id: number, user: Partial<User>) {
    const supplierr = await this.repo.findOne(id);
    if (!supplierr) {
      throw new NotFoundException('supplierr not found');
    }
    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Delete, supplierr)) {
      throw new ForbiddenException('Forbidden');
    }

    supplierr.isDeleted = true;
    return this.repo.save(supplierr);
  }
}
