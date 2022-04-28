import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserDto } from 'src/users/dtos/user.dto';

export class AuthDto {
  @Type(() => UserDto)
  @ValidateNested()
  @Expose()
  user: UserDto;

  @Expose()
  access_token: string;
}
