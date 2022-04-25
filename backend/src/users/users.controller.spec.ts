import { Body, Controller, Get, Param, Patch, Request } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Serialize(UserDto)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/profile')
  getProfile(@Request() request) {
    return this.usersService.getProfile(request.user.email);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Patch('/:email')
  update(@Param('id') email: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(email, body);
  }

  @Get('/toggle-active/:id')
  @Roles(Role.Admin)
  toggleIsActive(@Param('id') email: string) {
    return this.usersService.toggleIsActive(email);
  }
}
