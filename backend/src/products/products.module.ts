import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CaslModule } from 'src/casl/casl.module';
import { OrderLinesModule } from 'src/order-lines/orderLines.module';
import { UsersModule } from 'src/users/users.module';
import { StocksModule } from 'src/stocks/stocks.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), OrderLinesModule, CaslModule, UsersModule, forwardRef(() => StocksModule)],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
