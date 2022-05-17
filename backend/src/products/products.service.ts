import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Action } from 'src/auth/enums/action.enum';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Product } from './Product.entity';
import { CreateProductDto } from './dto/create-Product.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { base64ToBlob } from 'src/utils/base64ToBlob';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repo: Repository<Product>,
    private caslAbilityFactory: CaslAbilityFactory,
    private usersService: UsersService,
  ) {}

  async create(productDto: CreateProductDto, email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const product = this.repo.create(productDto);

    return this.repo.save(product);
  }

  async findAll(userId: number) {
    const products = await this.repo.find({ userId });
    return products;
  }

  async findOne(id: number, user: Partial<User>) {
    const product = await this.repo.findOne(id);
    if (!product) {
      throw new NotFoundException('produit non trouvé');
    }

    // checkAbility(user, Action.Read, Product);

    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Read, product)) {
      throw new ForbiddenException('Forbidden');
    }

    return product;
  }

  async update(id: number, attrs: UpdateProductDto, user: Partial<User>) {
    const product = await this.repo.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    const ability = this.caslAbilityFactory.createForUser(user);
    if (!ability.can(Action.Update, product)) {
      throw new ForbiddenException('Forbidden');
    }

    Object.assign(product, attrs);
    return this.repo.save(product);
  }
}
