import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';
import { isDate } from 'util/types';

export class CreatePackDto {
  @IsBoolean()
  crm: boolean;

  @IsBoolean()
  stock: boolean;

  @IsBoolean()
  order: boolean;

  @IsBoolean()
  article: boolean;

  @IsBoolean()
  user: boolean;

  @IsString()
  date: string;
}
