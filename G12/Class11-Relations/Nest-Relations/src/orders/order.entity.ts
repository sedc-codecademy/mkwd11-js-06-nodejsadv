import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  //  Relations
  //   Using the many to one decorator says that many orders can have one user
  @ManyToOne(() => User, (user) => user.orders, {
    // eager: true loads all data from the relation for every time the entity is retrieved from the database so basically any endpoint will return the full data
    // eager: true,
  })
  //   JoinColumn creates a column in the orders table that references by id the user that created the order
  @JoinColumn()
  user: User;

  @ManyToMany(() => Product, (product) => product.orders, {
    // eager: true,
  })
  //   JoinTable generates the combined table for many to many and it sets all the column names and types, it can only be ever set on one side of the relationship, specifically on the owner side
  @JoinTable()
  products: Product[];
}
