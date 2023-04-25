import { Team } from './../teams/teams.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  age: number;

  @Column()
  position: string;

  @Column({
    nullable: true,
  })
  teamId: string;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}