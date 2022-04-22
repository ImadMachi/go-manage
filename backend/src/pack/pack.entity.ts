import { Transform } from 'class-transformer';
import { Account } from 'src/accounts/account.entity';
import { Company } from 'src/companies/company.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  ref: string;

  @Column()
  description: string;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  date: Date;

  @ManyToOne(() => Company, (company) => company.packs)
  company:Company;
}
