import { ForbiddenException, forwardRef, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Action } from 'src/auth/enums/action.enum';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { StocksService } from 'src/stocks/stocks.service';
import * as fs from 'fs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repo: Repository<Product>,
    private caslAbilityFactory: CaslAbilityFactory,
    private usersService: UsersService,
    @Inject(forwardRef(() => StocksService))
    private stocksService: StocksService,
  ) {}

  async create(productDto: CreateProductDto, email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    const path = this.uploadImage(productDto.image);
    productDto.image = path;
    const product = this.repo.create(productDto);
    product.user = user;
    return this.repo.save(product);
  }

  uploadImage(imgData) {
    const name = `public/images/${Math.floor(Math.random() * 10000000000000).toString(32)}${Date.now()}`;
    const extension = imgData.match(/^data:image\/([A-Za-z-+\/]+);base64,/)[1];
    const path = `${name}.${extension}`;

    const base64Data = imgData.replace(/^data:([A-Za-z-+\/]+);base64,/, '');

    fs.writeFileSync(path, base64Data, { encoding: 'base64' });
    return path;
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

  async delete(id: number) {
    const product = await this.repo.findOne({ where: { id }, relations: ['stock'] });
    if (!product) {
      throw new NotFoundException('product not found');
    }
    await this.stocksService.delete(product.stock?.id);
    return this.repo.remove(product);
  }
}
