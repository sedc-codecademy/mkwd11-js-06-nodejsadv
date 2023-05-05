import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// By marking this as an entity typeorm will be able to map it to a table to our database, this is the ObjectRelationModel part
@Entity()
export class Product {
  // Primary generated column is the main column of the table and this will create ids in ascending order for every new row starting from 1
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Exclude()
  @Column()
  stock: number;

  @Column()
  price: number;
}
