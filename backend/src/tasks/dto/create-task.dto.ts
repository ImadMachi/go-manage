import { IsDateString, IsNumber, IsString } from 'class-validator';
import { Priority } from '../enums/priority.enum';

export class CreateTaskDto {
  @IsString()
  task: string;

  @IsDateString()
  dueDate: Date;

  @IsString()
  priority: Priority[];

  @IsNumber()
  customerId: number;
}
