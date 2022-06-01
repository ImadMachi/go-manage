import { Module } from '@nestjs/common';
import { QuoteProductService } from './quote-product.service';
import { QuoteProductController } from './quote-product.controller';
import { QuoteProduct } from './quote-product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuoteProduct])],
  controllers: [QuoteProductController],
  providers: [QuoteProductService],
  exports: [QuoteProductService],
})
export class QuoteProductModule {}
