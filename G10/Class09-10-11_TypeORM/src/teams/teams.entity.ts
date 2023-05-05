import { Player } from "../players/player.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { TeamStadiumDetailsDto } from "./dtos/team.dto";

@Entity()
export class Team {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  league: string;

  @Column("simple-array")
  jerseyColors: string[];

  @Column("simple-json")
  stadiumDetails: TeamStadiumDetailsDto;

  @OneToMany(() => Player, player => player.team)
  players: Player[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
