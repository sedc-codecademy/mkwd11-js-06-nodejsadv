import { Inject, Injectable } from "@nestjs/common";
import { TeamCreateDto, TeamResponseDto } from "./dtos/team.dto";
import { Team } from "./teams.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeamsService {
  constructor(
    @Inject("TEAM_REPOSITORY")
    private teamRepository: Repository<Team>
  ) {}

  getTeams(): Promise<TeamResponseDto[]> {
    return this.teamRepository.find({
      relations: ["players"],
    });
  }

  createTeam(body: TeamCreateDto): Promise<TeamResponseDto> {
    return this.teamRepository.save(body);
  }
}
