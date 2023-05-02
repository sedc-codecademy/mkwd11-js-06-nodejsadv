import { Repository } from "typeorm";
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Player } from "./player.entity";
import { PlayerCreateDto, PlayerResponseDto } from "./dtos/player.dto";

@Injectable()
export class PlayersService {
  constructor(
    @Inject("PLAYER_REPOSITORY")
    private playerRepository: Repository<Player>
  ) {}

  getPlayers(): Promise<PlayerResponseDto[]> {
    return this.playerRepository.find({
      // withDeleted: true,
    });
  }

  getPlayerById(id: string): Promise<PlayerResponseDto> {
    return this.playerRepository.findOne({
      where: { id }, // where: { id: id }
      relations: ["team"],
    });
  }

  createPlayer(body: PlayerCreateDto): Promise<PlayerResponseDto> {
    return this.playerRepository.save(body);
  }

  async addPlayerToTeam(playerId: string, teamId: string) {
    const player = await this.getPlayerById(playerId);

    const alreadyPartOfTheTeam = player?.teamId === teamId;

    if (alreadyPartOfTheTeam) {
      throw new BadRequestException(
        `Player with ID: ${playerId} is already a part of this team.`
      );
    }

    await this.playerRepository.save({
      id: playerId,
      teamId, // teamId: teamId
    });

    return this.getPlayerById(playerId);
  }

  async deletePlayer(id: string): Promise<void> {
    const response = await this.playerRepository.softDelete(id);

    console.log(response);
  }
}
