import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { Quote } from 'src/quotes/quote.entity';
import { Repository } from 'typeorm';
import { QuoteProduct } from './quote-product.entity';

@Injectable()
export class QuoteProductService {
  constructor(@InjectRepository(QuoteProduct) private repo: Repository<QuoteProduct>) {}
  async create(product: Product, quote: Quote, qty: number) {
    const quoteProduct = this.repo.create({ qty });
    quoteProduct.product = product;
    quoteProduct.quote = quote;
    this.repo.save(quoteProduct);
  }
}
