import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { DatabaseModule } from '../database/database.module';
import { teamProviders } from './team.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamsController],
  providers: [...teamProviders, TeamsService],
})
export class TeamsModule {}
