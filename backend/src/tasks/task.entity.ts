import { Customer } from 'src/customer/customer.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Priority } from './enums/priority.enum';
import { Status } from './enums/status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column({ type: 'date' })
  dueDate: Date;

  @Column({ type: 'enum', enum: Status, default: [Status.Pending] })
  status: Status[];

  @Column({ type: 'enum', enum: Priority })
  priority: Priority[];

  @ManyToOne(() => Customer, (customer) => customer.tasks, { onDelete: 'CASCADE' })
  customer: Customer;
}
