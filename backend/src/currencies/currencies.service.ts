import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Currency } from './currency.entity';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';



@Injectable()
export class CurrenciesService {
  constructor(@InjectRepository(Currency) private repo: Repository<Currency>) {}
  async create(billDto: CreateCurrencyDto) {
    const companies = await this.repo.find({ numCurrency: billDto.numCurrency});
    if (companies.length) {
      throw new BadRequestException('Cet facture est déjà utilisée');
    }
    const bill = this.repo.create(billDto);
    return this.repo.save(bill);
  }

  async findByCurrency(id: number) {
    const bill = await this.repo.findOne(id);
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    return bill;
  }

  async deleteCurrency(id: number) {
    const bill = await this.repo.findOne({ id });
    if (!bill) {
      throw new NotFoundException('currency not found');
    }
    return this.repo.remove(bill);
  }

  async update(id: number, attrs: Partial<UpdateCurrencyDto>) {
    const bill = await this.repo.findOne({ id });
    if (!bill) {
      throw new NotFoundException('currency not found');
    }
    Object.assign(bill, attrs);
    return this.repo.save(bill);
  }
}
