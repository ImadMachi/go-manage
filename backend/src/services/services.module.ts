import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from 'src/casl/casl.module';
import { OrderLinesModule } from 'src/order-lines/orderLines.module';
import { UsersModule } from 'src/users/users.module';

import { ServicesController } from './services.controller';
import { Service } from './Services.entity';
import { ServicesService } from './services.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service]), OrderLinesModule, CaslModule, UsersModule],
  providers: [ServicesService],
  controllers: [ServicesController],
})
export class ServicesModule {}
