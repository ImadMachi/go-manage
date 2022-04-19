import { IsOptional, IsBoolean, Max, Min } from 'class-validator';

export class UpdatePackDto {
  @IsOptional()
  @IsBoolean()
  crm: boolean;

  @IsOptional()
  @IsBoolean()
  stock: boolean;

  @IsOptional()
  @IsBoolean()
  order: boolean;

  @IsOptional()
  @IsBoolean()
  article: boolean;

  @IsOptional()
  @IsBoolean()
  user: boolean;
}
