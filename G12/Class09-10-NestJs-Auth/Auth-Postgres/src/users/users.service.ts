import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  @InjectRepository(User) private usersRepo: Repository<User>;

  // 1. Find by id
  async findUserById(userId: string) {
    const user = await this.usersRepo.findOneBy({ id: userId });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  // 2. Find by email
  async findUserByEmail(email: string) {
    const user = await this.usersRepo.findOneBy({ email });

    // If we throw an error anywhere in the execution of methods the logic with termiante, so in this case we either return a user or we return null
    // if (!user) throw new NotFoundException();

    return user;
  }

  // 3. Create user
  async createUser(userData: CreateUserDto) {
    const newUser = this.usersRepo.create(userData);

    await this.usersRepo.save(newUser);

    return newUser;
  }
}
