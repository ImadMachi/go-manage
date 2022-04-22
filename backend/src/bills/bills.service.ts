import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './bill.entity';

@Injectable()
export class BillsService {
  constructor(@InjectRepository(Bill) private repo: Repository<Bill>) {}
  async create(billDto: CreateBillDto) {
    const companies = await this.repo.find({ numBill: billDto.numBill});
    if (companies.length) {
      throw new BadRequestException('Cet facture est déjà utilisée');
    }
    const bill = this.repo.create(billDto);
    return this.repo.save(bill);
  }

  async findByBill(id: number) {
    const bill = await this.repo.findOne(id);
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    return bill;
  }

  async deleteBill(id: number) {
    const bill = await this.repo.findOne({ id });
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    return this.repo.remove(bill);
  }

  async update(id: number, attrs: Partial<UpdateBillDto>) {
    const bill = await this.repo.findOne({ id });
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    Object.assign(bill, attrs);
    return this.repo.save(bill);
  }
}
