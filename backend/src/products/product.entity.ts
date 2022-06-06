import { OrderLine } from 'src/order-lines/orderLine.entity';
import { Stock } from 'src/stocks/stock.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  description: string;

  @Column()
  userId: number;

  @OneToOne(() => Stock, (stock) => stock.product, { onDelete: 'CASCADE' })
  stock: Stock;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product, { cascade: true })
  @JoinColumn()
  orderLines: OrderLine[];

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  user: User;
}
