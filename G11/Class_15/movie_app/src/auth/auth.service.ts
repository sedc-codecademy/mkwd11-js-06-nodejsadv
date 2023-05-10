import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);

    if (!user) {
      throw new NotFoundException('User not existing');
    }

    if (password === user.password) {
      const { password, ...restProps } = user;

      return {
        ...restProps,
      };
    }

    return null;
  }

  async login(user: { userId: number; username: string; password: string }) {
    const payload = {
      username: user.username,
      sub: user.userId,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
