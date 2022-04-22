import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { CustomerModule } from './customer/customer.module';


import { BillsModule } from './bills/bills.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { ShippingsModule } from './shippings/shippings.module';
import { OrdersModule } from './order/orders.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'go-manage',
      // entities: [Company],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompaniesModule,
    CustomerModule,
    AccountsModule,
    
    BillsModule,
    CurrenciesModule,
    ShippingsModule,
    OrdersModule,
  

   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
