import { Order } from 'src/orders/order.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

// By marking this as an entity typeorm will be able to map it to a table to our database, this is the ObjectRelationModel part
@Entity()
export class Product {
  // Primary generated column is the main column of the table and this will create ids in ascending order for every new row starting from 1
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @ManyToMany(() => Order, (order) => order.products) orders: Order[];
}
