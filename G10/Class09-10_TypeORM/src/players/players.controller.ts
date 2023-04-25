import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerCreateDto, PlayerResponseDto } from './dtos/player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createPlayer(@Body() body: PlayerCreateDto): Promise<PlayerResponseDto> {
    return this.playerService.createPlayer(body);
  }
}
