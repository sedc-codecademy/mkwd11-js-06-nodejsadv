import { Exclude } from 'class-transformer';
import { Order } from 'src/orders/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  // Exclude when combined with the class serialized interceptor is used to remove certain properties from classes before they are convered to plain objects and json and sent back to the client, this is very useful for sanitizing data
  @Exclude()
  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Exclude()
  @Column()
  age: number;

  // With this we are doing a bi-directional relation with orders
  @OneToMany(() => Order, (order) => order.user) orders: Order[];
}
