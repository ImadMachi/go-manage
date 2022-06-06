import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductsService } from 'src/products/products.service';
import { PurchaseLinesService } from 'src/purchase-lines/purchase-lines.service';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './purchase.entity';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase) private repo: Repository<Purchase>,
    // private supplierService: SuppliersService,
    private productsService: ProductsService,
    private purchaseLinesService: PurchaseLinesService,
  ) {}

  async create(purchaseDto: CreatePurchaseDto, user: Partial<User>) {
    // const supplier = await this.supplierService.findOne(purchaseDto.supplierId, user);
    const purchase = this.repo.create(purchaseDto);
    // purchase.supplier = supplier;
    await this.repo.save(purchase);

    // for (const item of purchaseDto.products) {
    //   const product = await this.productsService.findOne(item.id, user);
    //   await this.purchaseLinesService.create(product, purchase, item.qty);
    // }

    await this.repo.save(purchase);
    return this.repo
      .createQueryBuilder('purchase')
      .where('purchase.id = :purchaseId', { purchaseId: purchase.id })
      .leftJoinAndSelect('purchase.supplier', 'supplier')
      .leftJoinAndSelect('purchase.purchaseLines', 'purchaseLine')
      .leftJoinAndSelect('purchaseLine.product', 'product')
      .getOne();
  }

  async findAll(userId: number) {
    return this.repo
      .createQueryBuilder('purchase')
      .leftJoinAndSelect('purchase.supplier', 'supplier')
      .where('supplier.userId = :userId', { userId })
      .leftJoinAndSelect('purchase.purchaseLines', 'purchaseLine')
      .leftJoinAndSelect('purchaseLine.product', 'product')
      .getMany();
  }

  findPurchaseDetailsForBill(purchaseId: number) {
    return this.repo
      .createQueryBuilder('purchase')
      .where('purchase.id = :purchaseId', { purchaseId })
      .leftJoinAndSelect('purchase.supplier', 'supplier')
      .leftJoinAndSelect('supplier.user', 'user')
      .leftJoinAndSelect('purchase.purchaseLines', 'purchaseLine')
      .leftJoinAndSelect('purchaseLine.product', 'product')
      .getOne();
  }

  // async findOne(id: number) {
  //   const purchase = await this.repo.findOne(id);
  //   if (!purchase) {
  //     throw new NotFoundException('purchase not found');
  //   }
  //   return purchase;
  // }

  async update(id: number, attrs: Partial<UpdatePurchaseDto>) {
    const purchase = await this.repo.findOne(id);
    if (!purchase) {
      throw new NotFoundException('purchase not found');
    }
    Object.assign(purchase, attrs);
    return this.repo.save(purchase);
  }

  async deleteOne(id: number) {
    const purchase = await this.repo.findOne(id);
    if (!purchase) {
      throw new NotFoundException('purchase not found');
    }
    const removedPurchase = await this.repo.remove(purchase);
    return { ...removedPurchase, id };
  }
}
