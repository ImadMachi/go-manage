import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateDateColumn } from 'typeorm';
import { AccountsService } from './accounts.service';
import { CreateAccountsDto } from './dto/create-user.dto';



@Controller('user')
export class AccountsController {

    constructor(private accountsService: AccountsService) {}

    @Post('/create')
    create(@Body() account: CreateAccountsDto) {
      return this.accountsService.create(account);
    }

    @Get('/ref/:ref')
    findByCompte(@Param ('ref') ref:string){
        return this.accountsService.findByCompte(ref)
    }

    @Delete('/ref/:ref')
    deleteUser(@Param ('ref') ref:string){
        return this.accountsService.deleteCompte(ref)
    }
     
    @Patch('/ref/:ref')
    updateUser(@Param ('ref') ref:string){
        return this.accountsService.updateCompte(ref)
    }

}

