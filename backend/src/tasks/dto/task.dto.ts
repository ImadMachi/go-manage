import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerDto } from 'src/customer/dto/customer.dto';
import { Priority } from '../enums/priority.enum';
import { Status } from '../enums/status.enum';

export class TaskDto {
  @Expose()
  id: number;

  @Expose()
  task: string;

  @Expose()
  dueDate: string;

  @Expose()
  status: Status[];

  @Expose()
  priority: Priority[];

  @Type(() => CustomerDto)
  @ValidateNested()
  @Expose()
  customer: CustomerDto;
}
