import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { CustomerModule } from './customer/customer.module';
import { BillsModule } from './bills/bills.module';
import { ShippingsModule } from './shippings/shippings.module';
import { OrdersModule } from './order/orders.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { CaslModule } from './casl/casl.module';
import { UsersModule } from './users/users.module';
import { PacksModule } from './packs/packs.module';
import { ProductsModule } from './products/products.module';
import { StocksModule } from './stocks/stocks.module';
import { OrderFormsModule } from './order-forms/order-forms.module';
import { OrderLinesModule } from './order-lines/orderLines.module';
import { MulterModule } from '@nestjs/platform-express';
import { TasksModule } from './tasks/tasks.module';
import { QuotesModule } from './quotes/quotes.module';
import { QuoteProductModule } from './quote-product/quote-product.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseLinesModule } from './purchase-lines/purchase-lines.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './public/images',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      database: 'go-manage',
      username: 'root',
      password: 'root',
      // entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    CustomerModule,
    BillsModule,
    ShippingsModule,
    OrdersModule,
    CaslModule,
    UsersModule,
    PacksModule,
    ProductsModule,
    StocksModule,
    OrderLinesModule,
    OrderFormsModule,
    TasksModule,
    QuotesModule,
    QuoteProductModule,
    PurchaseModule,
    PurchaseLinesModule,
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
  ],
})
export class AppModule {}
