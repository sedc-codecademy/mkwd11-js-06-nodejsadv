import { Team } from "src/teams/interfaces/team.interface";

export interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  number: number;
  teamId?: string;
  team: Team;
}
