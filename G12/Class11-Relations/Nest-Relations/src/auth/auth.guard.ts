import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // We will try all steps for validation, if any one fails we throw forbidden, if they all go through we return true which will allow us access to the resources
    try {
      const request = context.switchToHttp().getRequest();

      // We first extract token from request
      const token = this.extractToken(request);

      console.log('Secret', this.configService.get('ACCESS_TOKEN_SECRET'));

      console.log('Token', token);

      // We then try to verify and extract payload from token using jwt service
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      });

      // Final check to see if user exists in the database
      await this.usersService.findUserById(payload.id);

      console.log('Payload', payload);
    } catch (error) {
      console.log(error);
      throw new ForbiddenException();
    }

    return true;
  }

  // This method is private because it is only used by the parent class and nowhere else
  private extractToken(request: Request) {
    const token = request.headers['authorization']?.split(' ')[1];

    return token;
  }
}
