import { Transform } from "class-transformer";
import { Customer } from "src/customer/customer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  date: Date;

  @Column()
  description: string;

  @Column()
  reference:number;

 
  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
}
