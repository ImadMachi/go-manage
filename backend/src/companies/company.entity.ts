import { Account } from 'src/accounts/account.entity';
import { Pack } from 'src/pack/pack.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  field: string;

  @Column()
  size: number;

  @Column()
  socialReason: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  fix: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Account, (account) => account.company)
  accounts: Account[];

  @OneToMany(() => Pack, (pack) => pack.company)
  packs: Pack[];
}
