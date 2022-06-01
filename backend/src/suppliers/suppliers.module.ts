import { Module } from '@nestjs/common';

import { SuppliersController } from './suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './supplier.entity';
import { SuppliersService } from './suppliers.service';
import { UsersModule } from 'src/users/users.module';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports:[TypeOrmModule.forFeature([Supplier]), UsersModule, CaslModule],
  controllers: [SuppliersController],
  providers: [SuppliersService]
})
export class SuppliersModule {}
