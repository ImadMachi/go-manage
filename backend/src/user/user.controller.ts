import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UpdatePackDto } from 'src/pack/dto/update-pack.dto';

import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/update-user.dto';
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
     
    @Patch('/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
      return this.userService.updateUser(id, body);
    }
}
