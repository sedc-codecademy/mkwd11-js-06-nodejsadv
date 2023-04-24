import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CredentialsDto } from './dtos/credentials.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  //   1. Register user
  async registerUser(userData: CreateUserDto) {
    // Check if user already exists
    const user = await this.usersService.findUserByEmail(userData.email);

    if (user) throw new BadRequestException('Email already exists');

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 8);

    userData.password = hashedPassword;

    // Save the user in the database
    await this.usersService.createUser(userData);
  }

  //   2. Login user
  async loginUser(credentials: CredentialsDto) {
    // 1. Find user by email in database
    const user = await this.usersService.findUserByEmail(credentials.email);

    if (!user) throw new UnauthorizedException('Invalid Credentials');

    // 2. Check if passwords match
    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid Credentials');

    return user;
  }
}
