import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UserDto } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/users.service';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('invalid credentials');
    }
    return user;
  }

  async login(user: UserDto) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(payload: CreateUserDto) {
    const users = await this.usersService.find({ email: payload.email });
    if (users.length) {
      throw new BadRequestException('Cet email est déjà utilisée');
    }
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(payload.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    payload.password = result;
    const user = await this.usersService.create(payload);

    return this.login(user);
  }
}
