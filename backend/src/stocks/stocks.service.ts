import { Injectable, NotFoundException } from '@nestjs/common';
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
    private productsService: ProductsService,
  ) {}

  async create(productId: number, createStockDto: CreateStockDto, authUser: Partial<User>) {
    const [user, product] = await Promise.all([
      this.usersService.findByEmail(authUser.email),
      this.productsService.findOne(productId, authUser),
    ]);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const stock = this.repo.create(createStockDto);
    stock.user = user;
    stock.product = product;
    return this.repo.save(stock);
  }

  findAll() {
    return `This action returns all stocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
