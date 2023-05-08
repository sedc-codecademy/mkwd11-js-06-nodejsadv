import { Team } from 'src/teams/entities/team.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  salary: number;

  @Column()
  yearsOfExperience: number;

  @OneToOne(() => Team, (team) => team.manager)
  team: Team;
}
