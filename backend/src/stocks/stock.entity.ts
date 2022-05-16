import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qty: number;

  @Column({ type: 'date' })
  creationDate: Date;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.stocks, { onDelete: 'CASCADE' })
  user: User;

  @OneToOne(() => Product, (product) => product.stock, { onDelete: 'CASCADE' })
  product: Product;
}
