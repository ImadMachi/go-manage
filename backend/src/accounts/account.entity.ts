import { Max, Min } from 'class-validator';
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
  country: string;

  @Column()
  phone: string;

  @Column()
  @Max(1000)
  @Min(0)
  rc: number;

  @Column()
  @Max(1000)
  @Min(0)
  ice: number;

  @Column()
  ref: string;

  @Column()
  currency: string;
}
