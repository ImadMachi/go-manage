import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote.entity';
import { ProductsModule } from 'src/products/products.module';
import { CustomerModule } from 'src/customer/customer.module';
import { QuoteProductModule } from 'src/quote-product/quote-product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quote]), ProductsModule, CustomerModule, QuoteProductModule],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
