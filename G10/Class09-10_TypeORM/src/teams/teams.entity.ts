import { Player } from '../players/player.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  league: string;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
