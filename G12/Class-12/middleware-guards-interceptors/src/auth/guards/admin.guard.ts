import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // We read the user data that we attached to the request object in the auth guard
    console.log('From the admin guard', request.user);

    if (request?.user?.role === 'admin') return true;

    throw new ForbiddenException();
  }
}
