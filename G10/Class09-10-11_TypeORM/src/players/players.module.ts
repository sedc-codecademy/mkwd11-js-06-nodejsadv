import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { playerProvider } from './players.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayersController],
  providers: [...playerProvider, PlayersService],
})
export class PlayersModule {}
