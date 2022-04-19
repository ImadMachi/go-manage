import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  socialReason: string;

  @Column()
  address: string;

  @Column()
  zip: string;

  @Column()
  city: string;

  @Column()
  phone: string;

  @Column()
  rc: number;

  @Column()
  ice: number;

  @Column()
  ref: string;

  @Column()
  currency: string;
}
