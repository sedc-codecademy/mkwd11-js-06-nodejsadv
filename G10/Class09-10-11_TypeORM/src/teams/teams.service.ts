import { Inject, Injectable } from "@nestjs/common";
import { TeamCreateDto, TeamQueryDto, TeamResponseDto } from "./dtos/team.dto";
import { Team } from "./teams.entity";
import { Repository, ILike } from "typeorm";

@Injectable()
export class TeamsService {
  constructor(
    @Inject("TEAM_REPOSITORY")
    private teamRepository: Repository<Team>
  ) {}

  getTeams(query: TeamQueryDto): Promise<TeamResponseDto[]> {
    let whereQuery = {};

    if (query?.league) {
      whereQuery = { ...whereQuery, league: query.league };
    }

    if (query?.location) {
      whereQuery = { ...whereQuery, location: query.location };
    }

    if (query?.name) {
      whereQuery = { ...whereQuery, name: ILike(`%${query.name}%`) };
    }

    return this.teamRepository.find({
      where: whereQuery,
      relations: ["players"],
      order: {
        name: "ASC",
        league: "ASC",
      },
    });
  }

  createTeam(body: TeamCreateDto): Promise<TeamResponseDto> {
    return this.teamRepository.save(body);
  }
}
