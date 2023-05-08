import { Manager } from 'src/managers/entities/manager.entity';
import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ranking: number;

  @Column()
  budget: number;

  @OneToOne(() => Manager, (manager) => manager.team)
  @JoinColumn()
  manager: Manager;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
