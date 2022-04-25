import { Body, Controller, Delete, Get, Param, Patch, Request, UseGuards } from '@nestjs/common';
import { PoliciesGuard } from 'src/auth/guards/policy.guard';
import { CheckPolicies } from 'src/casl/decorators/policy.decorator';
import { ReadUserPolicyHandler, ToggleUserIsActivePolicyHandler } from 'src/casl/handlers/users.handler';
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

  @Patch('/profile')
  updateProfile(@Body() body: UpdateUserDto, @Request() request) {
    return this.usersService.updateProfile(request.user.email, body);
  }

  @Get()
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ReadUserPolicyHandler())
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:email')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ReadUserPolicyHandler())
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Get('/toggle-active/:email')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new ToggleUserIsActivePolicyHandler())
  toggleIsActive(@Param('email') email: string) {
    return this.usersService.toggleIsActive(email);
  }
}
