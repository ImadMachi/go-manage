import { Blob } from 'buffer';
import { OrderLine } from 'src/order-lines/orderLine.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  title: string;

  @Column()
  userId: number;

  @Column({ type: 'blob' })
  image: Blob;

  @Column()
  rating: number;

  @Column()
  stock: number;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product, { cascade: true })
  orderLines: OrderLine[];

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  user: User;
}
