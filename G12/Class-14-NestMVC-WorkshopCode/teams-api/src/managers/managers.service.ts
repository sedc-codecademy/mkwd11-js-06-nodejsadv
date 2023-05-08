import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManagersService {
  @InjectRepository(Manager) private managersRepo: Repository<Manager>;

  findAll() {
    return this.managersRepo.find({});
  }

  async findOne(id: number) {
    const manager = await this.managersRepo.findOne({
      where: { id },
      relations: { team: true },
    });

    if (!manager)
      throw new NotFoundException(`Manager with id: ${id} not found!`);

    return manager;
  }

  async create(createManagerDto: CreateManagerDto) {
    const newManager = this.managersRepo.create(createManagerDto);

    const createdManager = await this.managersRepo.save(newManager);

    return createdManager;
  }

  async update(id: number, updateManagerDto: UpdateManagerDto) {
    const manager = await this.findOne(id);

    Object.assign(manager, updateManagerDto);

    await this.managersRepo.save(manager);
  }

  async remove(id: number) {
    const manager = await this.findOne(id);

    await this.managersRepo.remove(manager);
  }
}
