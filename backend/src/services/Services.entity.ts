import { OrderLine } from 'src/order-lines/orderLine.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  title: string;

  @Column()
  userId: number;

  @Column()
  image: string;

  @Column()
  rating: number;

  

  @Column()
  description:string;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product, { onDelete: 'CASCADE' })
  orderLines: OrderLine[];

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  user: User;
}
