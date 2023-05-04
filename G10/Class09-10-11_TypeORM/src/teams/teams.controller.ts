import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamCreateDto, TeamQueryDto, TeamResponseDto } from "./dtos/team.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Teams")
@Controller("teams")
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getTeams(@Query() query: TeamQueryDto): Promise<TeamResponseDto[]> {
    console.log("the query", query);
    return this.teamsService.getTeams(query);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTeam(@Body() body: TeamCreateDto): Promise<TeamResponseDto> {
    return this.teamsService.createTeam(body);
  }
}
