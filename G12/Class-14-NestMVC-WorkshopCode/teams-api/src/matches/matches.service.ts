import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchesService {
  @InjectRepository(Match) private matchesRepo: Repository<Match>;

  findAll() {
    return this.matchesRepo.find({});
  }

  async findOne(id: number) {
    const match = await this.matchesRepo.findOne({
      where: { id },
      relations: {
        players: true,
      },
    });

    if (!match) throw new NotFoundException(`Match with id: ${id} not found`);

    return match;
  }

  async create(createMatchDto: CreateMatchDto) {
    const newMatch = this.matchesRepo.create({
      ...createMatchDto,
      players: createMatchDto.players.map((playerId) => ({ id: playerId })),
    });

    const createdMatch = await this.matchesRepo.save(newMatch);

    return createdMatch;
  }

  async update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  async remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
