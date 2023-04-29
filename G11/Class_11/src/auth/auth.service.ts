import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    //validate the users credentails
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      const { password, ...restProperties } = user;

      return {
        ...restProperties,
      };
    }

    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      // refresh_token: this.jwtService.sign(payload, {
      //   secret: 'some_other_secret',
      // }),
    };
  }
}
