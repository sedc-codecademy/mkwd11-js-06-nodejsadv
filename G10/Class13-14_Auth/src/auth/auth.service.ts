import { Injectable, UnauthorizedException } from "@nestjs/common";
import {
  UserLoginDto,
  UserRegisterDto,
  UserResponseDto,
} from "./dtos/auth.dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { SALT_ROUNDS } from "./auth.const";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(body: UserRegisterDto): Promise<UserResponseDto> {
    const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);

    const userResponse = await this.userService.createUser({
      ...body,
      password: hashedPassword,
    });

    return userResponse;
  }

  async login(credentials: UserLoginDto) {
    const user = await this.userService.getUserByUsername(credentials.username);

    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException(`Invalid credentials`);
    }

    return user;
  }
}
