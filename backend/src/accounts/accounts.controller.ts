import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { CreateAccountsDto } from './dto/create-user.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('user')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post('/create')
  create(@Body() account: CreateAccountsDto) {
    return this.accountsService.create(account);
  }

  @Get('/ref/:ref')
  findByCompte(@Param('ref') ref: string) {
    return this.accountsService.findByCompte(ref);
  }

  @Delete('/ref/:ref')
  deleteUser(@Param('ref') ref: string) {
    return this.accountsService.deleteCompte(ref);
  }
  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateAccountDto) {
    return this.accountsService.updateCompte(id, body);
  }
}
