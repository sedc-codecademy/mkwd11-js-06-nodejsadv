import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({
    // By setting nullable to true, the column becomes optional, all columns by default are non-nullable meaning that they always need to have a value
    nullable: true,
  })
  role: string;
}
