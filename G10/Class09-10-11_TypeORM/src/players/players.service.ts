import { Repository } from "typeorm";
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from "@nestjs/common";
import { Player } from "./player.entity";
import {
  PlayerCreateDto,
  PlayerQueryDto,
  PlayerResponseDto,
} from "./dtos/player.dto";
import { TeamsService } from "src/teams/teams.service";

@Injectable()
export class PlayersService {
  constructor(
    @Inject("PLAYER_REPOSITORY")
    private playerRepository: Repository<Player>,
    @Inject(forwardRef(() => TeamsService)) private teamService: TeamsService
  ) {}

  getPlayers(query: PlayerQueryDto): Promise<PlayerResponseDto[]> {
    return this.playerRepository.find({
      where: query,
      // withDeleted: true,
    });
  }

  async getPlayerById(id: string): Promise<PlayerResponseDto> {
    const player = await this.playerRepository.findOne({
      where: { id }, // where: { id: id }
      relations: ["team"],
    });

    if (!player) {
      throw new NotFoundException(`Player with ID: ${id} doesn't exist`);
    }

    return player;
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

  async updatePlayerShirtNumber(
    id: string,
    number: number
  ): Promise<PlayerResponseDto> {
    await this.getPlayerById(id);

    try {
      await this.playerRepository.save({
        id, // id: id
        number, // number: number
      });
    } catch (error) {
      throw new BadRequestException(
        `Other player already has the number ${number} assigned.`
      );
    }

    return this.getPlayerById(id);
  }

  async removePlayerFromTeam(id: string): Promise<void> {
    const player = await this.getPlayerById(id);

    await this.playerRepository.save({
      id,
      team: null,
    });
  }

  async deletePlayer(id: string): Promise<void> {
    await this.playerRepository.softDelete(id);
  }
}
