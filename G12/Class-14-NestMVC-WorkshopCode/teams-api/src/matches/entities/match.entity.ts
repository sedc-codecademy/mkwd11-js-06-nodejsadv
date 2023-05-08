import { Player } from 'src/players/entities/player.entity';
import {
  Entity,
  Column,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  league: string;

  @Column()
  result: string;

  @ManyToMany(() => Player, (player) => player.matches)
  @JoinTable()
  players: Player[];
}
