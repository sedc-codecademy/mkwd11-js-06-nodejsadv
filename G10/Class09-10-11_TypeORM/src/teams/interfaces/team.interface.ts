import { Player } from "../../players/interfaces/player.interface";

export interface Team {
  id: string;
  name: string;
  location: string;
  league: string;
  jerseyColors: string[];
  stadiumDetails: StadiumDetails;
  players: Player[];
}

interface StadiumDetails {
  name: string;
  capacity: number;
}
