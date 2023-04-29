import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// In a NestJS application that uses the Passport module and JWTs for authentication,
// we use a PassportStrategy to define how we want to authenticate users based on the JWT.

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // The jwtFromRequest option specifies that the JWT should be extracted from the Authorization header of the incoming request.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //   The ignoreExpiration option specifies that we do not want to ignore the expiration time of the JWT. If the JWT is expired, the user will not be authenticated.
      ignoreExpiration: false,
      //   the secretOrKey option specifies the secret key that was used to sign the JWT.
      secretOrKey: 'some_secret',
    });
  }

  // the name must validate
  async validate(payload) {
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
