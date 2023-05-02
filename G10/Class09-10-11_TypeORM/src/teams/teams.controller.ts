import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamCreateDto, TeamResponseDto } from "./dtos/team.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Teams")
@Controller("teams")
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getTeams(): Promise<TeamResponseDto[]> {
    return this.teamsService.getTeams();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTeam(@Body() body: TeamCreateDto): Promise<TeamResponseDto> {
    return this.teamsService.createTeam(body);
  }
}
