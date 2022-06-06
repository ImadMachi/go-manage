import { IsDateString, IsOptional, IsString } from 'class-validator';
import { Priority } from '../enums/priority.enum';
import { Status } from '../enums/status.enum';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  task: string;

  @IsOptional()
  @IsDateString()
  dueDate: Date;

  @IsOptional()
  @IsString()
  status: Status[];

  @IsOptional()
  @IsString()
  priority: Priority[];
}
