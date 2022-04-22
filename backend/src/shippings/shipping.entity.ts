;
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
 region: string;

  @Column()
 lastName: string;

  @Column()
  firstName: string;

  @Column()
  zip: string;

 @Column()
 adresse1:string;

 @Column()
 adresse2:string;

 @Column()
 reference:number;
}
