import { Transform } from 'class-transformer';
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
  address: string;

  @Column()
  category: string;

  @Column()
  phone: string;

  @Column()
  type: string;

  @Column()
  reference: string;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  creationDate: Date;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  paymentDate: Date;
}
