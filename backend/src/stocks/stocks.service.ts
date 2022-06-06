import { BadRequestException, ForbiddenException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './stock.entity';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(Stock) private repo: Repository<Stock>,
    private usersService: UsersService,
    @Inject(forwardRef(() => ProductsService))
    private productsService: ProductsService,
  ) {}

  async isProductInStock(productId: number, qty: number) {
    const stockQty = await this.repo
      .createQueryBuilder('stock')
      .leftJoinAndSelect('stock.product', 'product')
      .where('product.id = :productId', { productId })
      .select(['stock.qty'])
      .getOne();

    return stockQty?.qty >= qty;
  }

  async create(productId: number, createStockDto: CreateStockDto, authUser: Partial<User>) {
    const [user, product] = await Promise.all([
      this.usersService.findByEmail(authUser.email),
      this.productsService.findOne(productId, authUser),
    ]);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const stocks = await this.repo.find({ productId });
    if (stocks.length) {
      throw new BadRequestException('A stock already exist for this product');
    }
    const stock = this.repo.create(createStockDto);
    stock.user = user;
    stock.product = product;
    await this.repo.save(stock);
    return this.repo.findOne({ where: { id: stock.id }, relations: ['product'] });
  }

  findAll(userId: number) {
    return this.repo.find({ where: { userId }, relations: ['product'] });
  }

  async findOne(id: number) {
    const stock = await this.repo.findOne({ where: { id }, relations: ['product'] });
    if (!stock) {
      throw new NotFoundException('stock not found');
    }
    return stock;
  }

  async substractQty(productId: number, qty: number) {
    const stock = await this.repo
      .createQueryBuilder('stock')
      .leftJoin('stock.product', 'product')
      .where('product.id = :productId', { productId })
      .getOne();

    if (!stock) {
      throw new NotFoundException('stock not found');
    }

    stock.qty -= qty;
    return this.repo.save(stock);
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    const stock = await this.repo.findOne(id);
    if (!stock) {
      throw new NotFoundException('stock not found');
    }
    // const ability = this.caslAbilityFactory.createForUser(user);
    // if (!ability.can(Action.Update, customer)) {
    //   throw new ForbiddenException('Forbidden');
    // }

    Object.assign(stock, updateStockDto);
    await this.repo.save(stock);
    return this.repo.findOne({ where: { id: stock.id }, relations: ['product'] });
  }

  async delete(id: number) {
    const stock = await this.repo.findOne(id);
    if (!stock) {
      throw new NotFoundException('stock not found');
    }
    const removedStock = await this.repo.remove(stock);
    return { ...removedStock, id };
  }
}
