import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreatePackDto {
    
 

  @IsBoolean()
  crm: boolean;

  @IsBoolean()
  stock: boolean;

  @IsBoolean()
  commandes: boolean;

  @IsBoolean()
  articles: boolean;


  @IsBoolean()
  utilisateurs: boolean;

 
}
