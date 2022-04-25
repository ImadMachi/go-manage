import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { CustomerModule } from './customer/customer.module';


import { BillsModule } from './bills/bills.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { ShippingsModule } from './shippings/shippings.module';
import { OrdersModule } from './order/orders.module';


import { RolesGuard } from './auth/guards/roles.guard';
import { CaslModule } from './casl/casl.module';
import { UsersModule } from './users/users.module';
import { PacksModule } from './packs/packs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'go-manage',
      // entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    CustomerModule,
    AccountsModule,
    
    BillsModule,
    CurrenciesModule,
    ShippingsModule,
    OrdersModule,
  

   
    CaslModule,
    UsersModule,
    PacksModule,
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
  ],
})
export class AppModule {}
