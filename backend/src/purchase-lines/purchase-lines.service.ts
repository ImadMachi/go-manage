import { Injectable } from '@nestjs/common';
import { CreatePurchaseLineDto } from './dto/create-purchase-line.dto';
import { UpdatePurchaseLineDto } from './dto/update-purchase-line.dto';

@Injectable()
export class PurchaseLinesService {
  create(createPurchaseLineDto: CreatePurchaseLineDto) {
    return 'This action adds a new purchaseLine';
  }

  findAll() {
    return `This action returns all purchaseLines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseLine`;
  }

  update(id: number, updatePurchaseLineDto: UpdatePurchaseLineDto) {
    return `This action updates a #${id} purchaseLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseLine`;
  }
}
