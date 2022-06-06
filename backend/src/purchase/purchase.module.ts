import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';
import { PurchaseLinesModule } from 'src/purchase-lines/purchase-lines.module';
import { SuppliersModule } from 'src/suppliers/suppliers.module';
import { PurchasesController } from './purchase.controller';
import { Purchase } from './purchase.entity';
import { PurchasesService } from './purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase]), PurchaseLinesModule, ProductsModule, SuppliersModule],
  controllers: [PurchasesController],
  providers: [PurchasesService],
  // exports: [PurchasesService],
})
export class PurchaseModule {}
