import { OrderLine } from 'src/order-lines/orderLine.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  rating: number;

  @Column()
  stock: number;

  @Column()
  description: string;

  @Column()
  userId: number;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product, { cascade: true })
  @JoinColumn()
  orderLines: OrderLine[];

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  user: User;
}
