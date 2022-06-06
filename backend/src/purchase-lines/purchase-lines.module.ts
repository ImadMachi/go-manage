import { Module } from '@nestjs/common';
import { PurchaseLinesService } from './purchase-lines.service';
import { PurchaseLinesController } from './purchase-lines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseLine } from './purchase-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseLine])],
  controllers: [PurchaseLinesController],
  providers: [PurchaseLinesService],
  exports: [PurchaseLinesService],
})
export class PurchaseLinesModule {}
