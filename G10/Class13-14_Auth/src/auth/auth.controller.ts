import { AuthService } from "./auth.service";
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
  LoginResponseDto,
  UserLoginDto,
  UserRegisterDto,
  UserResponseDto,
} from "./dtos/auth.dto";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @UsePipes(ValidationPipe)
  register(@Body() body: UserRegisterDto): Promise<UserResponseDto> {
    return this.authService.register(body);
  }

  @Post("login")
  login(@Body() body: UserLoginDto): Promise<LoginResponseDto> {
    return this.authService.login(body);
  }
}
