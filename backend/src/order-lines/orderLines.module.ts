import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderLine } from './orderLine.entity';
import { OrderLinesController } from './orderLines.controller';
import { OrderLinesService } from './orderLines.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderLine])],
  providers: [OrderLinesService],
  controllers: [OrderLinesController],
  exports: [OrderLinesService],
})
export class OrderLinesModule {}
