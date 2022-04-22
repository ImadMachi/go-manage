import { Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @Transform(({ value }) => new Date(value))
  @Column('text')
  date: Date;

  @ManyToOne(() => User, (user) => user.packs)
  user: User;
}
