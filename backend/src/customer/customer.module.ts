import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { UsersModule } from 'src/users/users.module';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), UsersModule, CaslModule],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
