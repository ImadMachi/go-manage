import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  adress: string;

  @Column()
  category: string;

  @Column()
  phone: string;

  @Column()
  type: string;

  @Column()
  reference: string;
}
