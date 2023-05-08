import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  @InjectRepository(Player) private playersRepo: Repository<Player>;

  findAll() {
    return this.playersRepo.find({});
  }

  async findOne(id: number) {
    const player = await this.playersRepo.findOne({
      where: { id },
      relations: {
        team: true,
        matches: true,
      },
    });

    if (!player) throw new NotFoundException(`Player with id: ${id} not found`);

    return player;
  }

  async create(createPlayerDto: CreatePlayerDto) {
    const newPlayer = await this.playersRepo.create({
      ...createPlayerDto,
      team: { id: createPlayerDto.team },
    });

    const createdPlayer = await this.playersRepo.save(newPlayer);

    return createdPlayer;
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const player = await this.findOne(id);

    Object.assign(player, updatePlayerDto);

    await this.playersRepo.save(player);
  }

  async remove(id: number) {
    const player = await this.findOne(id);

    await this.playersRepo.remove(player);
  }
}
