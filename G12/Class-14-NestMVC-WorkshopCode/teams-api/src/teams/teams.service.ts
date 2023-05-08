import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  @InjectRepository(Team) private teamsRepo: Repository<Team>;

  findAll() {
    return this.teamsRepo.find({});
  }

  async findOne(id: number) {
    const team = await this.teamsRepo.findOne({
      where: { id },
      relations: {
        manager: true,
        players: true,
      },
    });

    if (!team) throw new NotFoundException(`Team with id: ${id} not found`);

    return team;
  }

  async create(createTeamDto: CreateTeamDto) {
    const newTeam = await this.teamsRepo.create({
      ...createTeamDto,
      manager: { id: createTeamDto.manager },
    });

    const createdTeam = await this.teamsRepo.save(newTeam);

    return createdTeam;
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.findOne(id);

    Object.assign(team, updateTeamDto);

    await this.teamsRepo.save(team);
  }

  async remove(id: number) {
    const team = await this.findOne(id);

    await this.teamsRepo.remove(team);
  }
}
