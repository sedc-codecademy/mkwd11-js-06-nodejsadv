import { Team } from "./../teams/teams.entity";
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique,
} from "typeorm";

@Entity()
// @Unique(['number'])
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("int")
  age: number;

  @Column()
  position: string;

  @Column({ type: "int", unique: true })
  number: number;

  @Column({
    nullable: true,
  })
  teamId: string;

  @ManyToOne(() => Team, team => team.players)
  team: Team;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
