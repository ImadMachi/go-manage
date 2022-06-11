import { Body, Controller, Get, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ChangePasswordDto } from 'src/users/dtos/change-password.dto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { AuthDto } from './dtos/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Serialize(AuthDto)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() request) {
    return this.authService.login(request.user);
  }

  @Public()
  @Post('/signup')
  signup(@Body() payload: CreateUserDto) {
    return this.authService.signup(payload);
  }

  @Patch('/change-password')
  changePassword(@Body() body: ChangePasswordDto, @Request() request) {
    return this.authService.changePassword(body, request.user.email);
  }
}
