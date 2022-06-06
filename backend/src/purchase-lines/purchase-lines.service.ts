import { BadRequestException, HttpException, Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from 'src/purchase/purchase.entity';
import { Product } from 'src/products/product.entity';
import { QueryBuilder, Repository } from 'typeorm';
import { PurchaseLine } from './purchase-line.entity';

@Injectable()
export class PurchaseLinesService {
  constructor(@InjectRepository(PurchaseLine) private repo: Repository<PurchaseLine>) {}
  async create(product: Product, purchase: Purchase, qty: number) {
    const purchaseLines = this.repo.create({ qty });
    purchaseLines.product = product;
    purchaseLines.purchase = purchase;
    return this.repo.save(purchaseLines);
  }

  
  findByPurchase(purchaseId:number){
    return this.repo
    .createQueryBuilder('purchaseLines')
    .where('purchaseId=purchaseId',{purchaseId})
    .leftJoinAndSelect('purchaseLines.product', 'product')
    .select(['purchaseLines.qty','product.image','product.price','product.title'])
    .getMany();
    
  }
}
  