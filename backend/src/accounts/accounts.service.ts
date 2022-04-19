import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Account } from './account.entity';
import { CreateAccountsDto } from './dto/create-user.dto';

@Injectable()
export class AccountsService {
  constructor(@InjectRepository(Account) private repo: Repository<Account>) {}
  create(accountDTO: CreateAccountsDto) {
    const accounts = this.repo.create(accountDTO);
    if (this.findByCompte(accounts.ref)) {
      throw new HttpException('this email already taken', 409);
    }
    return this.repo.save(accounts);
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

  async updateCompte(id: number , attrs: Partial<Account>) {
    const compte = await this.repo.findOne({ id });
    if (!compte) {
      throw new NotFoundException('compte not found');
    }
    Object.assign(compte, attrs);
    return this.repo.save(compte);
  }
}
