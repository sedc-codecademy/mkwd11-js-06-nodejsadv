import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { PlayersService } from "./players.service";
import {
  PlayerCreateDto,
  PlayerResponseDto,
  PlayerAddToTeamDto,
} from "./dtos/player.dto";
import { ApiParam, ApiTags } from "@nestjs/swagger";

@ApiTags("Players")
@Controller("players")
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Get()
  getPlayers(): Promise<PlayerResponseDto[]> {
    return this.playerService.getPlayers();
  }

  @Get(":id")
  getPlayer(@Param("id") id: string): Promise<PlayerResponseDto> {
    return this.playerService.getPlayerById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPlayer(@Body() body: PlayerCreateDto): Promise<PlayerResponseDto> {
    return this.playerService.createPlayer(body);
  }

  @Patch(":playerId/team/:teamId") // /players/:playerId/team/:teamId
  @UsePipes(ValidationPipe)
  addPlayerToTeam(@Param() params: PlayerAddToTeamDto) {
    return this.playerService.addPlayerToTeam(params.playerId, params.teamId);
  }

  @Patch(":id/number/:number") // /players/:id/number/:number
  updatePlayerShirtNumber(
    @Param("id") id: string,
    @Param("number", ParseIntPipe) number: number
  ): Promise<PlayerResponseDto> {
    return this.playerService.updatePlayerShirtNumber(id, number);
  }

  @Delete(":id")
  deletePlayer(@Param("id") id: string): Promise<void> {
    return this.playerService.deletePlayer(id);
  }
}
