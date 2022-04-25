import { Module } from '@nestjs/common';
import { OrderLinesService } from './order-lines.service';
import { OrderLinesController } from './order-lines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderLine } from './orderLine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderLine])],
  providers: [OrderLinesService],
  controllers: [OrderLinesController],
})
export class OrderLinesModule {}
