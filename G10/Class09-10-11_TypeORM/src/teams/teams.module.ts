import { Module } from "@nestjs/common";
import { TeamsController } from "./teams.controller";
import { TeamsService } from "./teams.service";
import { DatabaseModule } from "../database/database.module";
import { teamProviders } from "./team.providers";
import { PlayersService } from "src/players/players.service";
import { playerProvider } from "src/players/players.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [TeamsController],
  providers: [
    ...teamProviders,
    ...playerProvider,
    TeamsService,
    PlayersService,
  ],
})
export class TeamsModule {}
