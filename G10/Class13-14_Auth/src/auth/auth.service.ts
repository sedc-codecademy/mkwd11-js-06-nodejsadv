import { Injectable, UnauthorizedException } from "@nestjs/common";
import {
  LoginResponseDto,
  UserLoginDto,
  UserRegisterDto,
  UserResponseDto,
} from "./dtos/auth.dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { SALT_ROUNDS } from "./auth.const";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async register(body: UserRegisterDto): Promise<UserResponseDto> {
    const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);

    const userResponse = await this.userService.createUser({
      ...body,
      password: hashedPassword,
    });

    return userResponse;
  }

  async login(credentials: UserLoginDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );

    const accessToken = this.jwtService.sign({ test: "test" });

    return {
      user,
      accessToken,
    };
  }

  async validateUser(
    username: string,
    password: string
  ): Promise<UserResponseDto> {
    const user = await this.userService.getUserByUsername(username);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(`Invalid credentials`);
    }

    return user;
  }
}
