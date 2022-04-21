import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get('/email/:email')
  findByUser(@Param('email') email: string) {
    return this.userService.findByUser(email);
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(id, body);
  }
}
