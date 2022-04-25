import { Customer } from 'src/customer/customer.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numBill: string;

  @Column()
  description: string;

  @Column()
  qte: number;

  @Column()
  unitePrice: number;

  @Column()
  tva: number;

  @Column()
  totalHt: number;

  @Column()
  totalTtc: number;

   //@ManyToOne(() => Customer, (customer) => customer.bills,{onDelete:'CASCADE'})
    //customer:Customer;
}
