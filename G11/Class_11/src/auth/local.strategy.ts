import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

// Authentication strategies are a way to handle the process of identifying and verifying the identity of a user attempting to access a system or application.
// In the context of NestJS, an authentication strategy is a method that determines how a user's credentials are validated and how an access token or session is generated
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    // We check if we have user with given credentials
    const user = this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
