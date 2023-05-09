import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserRegisterDto, UserResponseDto } from "src/auth/dtos/auth.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async getUserByUsername(username: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new NotFoundException(
        `User with username: ${username} is not found`
      );
    }

    return user;
  }

  createUser(user: UserRegisterDto): Promise<UserResponseDto> {
    return this.userRepository.save(user);
  }
}
