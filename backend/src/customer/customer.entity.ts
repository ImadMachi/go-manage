import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ default: 0 })
  totalSpent: number;

  @Column({ default: 0 })
  orders: number;

  @Column()
  creationDate: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.customers, { onDelete: 'CASCADE' })
  user: User;
}
