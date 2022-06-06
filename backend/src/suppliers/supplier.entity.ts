import { Purchase } from 'src/purchase/purchase.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Supplier {
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

  @Column()
  creationDate: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.suppliers, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Purchase, (purchase) => purchase.supplier, { cascade: true })
  purchases: Purchase[];

  
}

