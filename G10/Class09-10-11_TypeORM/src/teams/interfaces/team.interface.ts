export interface Team {
  id: string;
  name: string;
  location: string;
  league: string;
  jerseyColors: string[];
  stadiumDetails: StadiumDetails;
  //players: any[]
}

interface StadiumDetails {
  name: string;
  capacity: number;
}
