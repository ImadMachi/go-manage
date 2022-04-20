import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from './account.entity';
import { CreateAccountsDto } from './dto/create-user.dto';

@Injectable()
export class AccountsService {
  constructor(@InjectRepository(Account) private repo: Repository<Account>) {}
  async createaccount(accountDto: CreateAccountsDto) {
    const accounts = await this.repo.find({ ref: accountDto.ref });
    if (accounts.length) {
      throw new BadRequestException('Cet reference est déjà utilisée');
    }
    const account = this.repo.create(accountDto);
    return this.repo.save(account);
  }

  async findByCompte(ref: string) {
    const compte = await this.repo.findOne({ ref });
    if (!compte) {
      throw new NotFoundException('compte not found');
    }
    return compte;
  }

  async deleteCompte(ref: string) {
    const compte = await this.repo.findOne({ ref });
    if (!compte) {
      throw new NotFoundException('compte not found');
    }
    return this.repo.remove(compte);
  }

  async updateCompte(id: number, attrs: Partial<Account>) {
    const compte = await this.repo.findOne({ id });
    if (!compte) {
      throw new NotFoundException('compte not found');
    }
    Object.assign(compte, attrs);
    return this.repo.save(compte);
  }
}
