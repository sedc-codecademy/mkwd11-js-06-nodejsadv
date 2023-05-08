import { Match } from 'src/matches/entities/match.entity';
import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  salary: number;

  @Column()
  ranking: number;

  @ManyToOne(() => Team, (team) => team.players)
  @JoinColumn()
  team: Team;

  @ManyToMany(() => Match, (match) => match.players)
  matches: Match[];
}
