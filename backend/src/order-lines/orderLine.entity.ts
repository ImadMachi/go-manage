import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderLine {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  reference: number;

  @Column()
  qte: number;

  @Column()
  description: string;

  //ranzid prosuit rah blati ncreeih o bit nzid order
}
