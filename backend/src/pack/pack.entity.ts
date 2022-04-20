import { Transform } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  crm: boolean;

  @Column()
  stock: boolean;

  @Column()
  order: boolean;

  @Column()
  article: boolean;

  @Column()
  user: boolean;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  date: Date;
}
