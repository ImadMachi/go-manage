import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateDateColumn } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserService } from './user.service';



@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('/create')
    create(@Body() user: CreateUserDto) {
      return this.userService.create(user);
    }

    @Get('/email/:email')
    findByUser(@Param ('email') email:string){
        return this.userService.findByUser(email)
    }

    @Delete('/id/:id')
    deleteUser(@Param ('id') id:number){
        return this.userService.deleteUser(id)
    }
     
    @Patch('/id/:id')
    updateUser(@Param ('id') id:number){
        return this.userService.updateUser(id)
    }

}
