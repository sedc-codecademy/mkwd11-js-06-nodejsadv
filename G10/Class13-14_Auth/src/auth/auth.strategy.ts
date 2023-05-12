import { AuthService } from "./auth.service";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserResponseDto } from "./dtos/auth.dto";

// This is just an example of how to use PassportStrategy, this is not used in the project
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserResponseDto> {
    const user = await this.authService.validateUser(username, password);

    return user;
  }
}
