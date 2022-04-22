import { Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.packs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
