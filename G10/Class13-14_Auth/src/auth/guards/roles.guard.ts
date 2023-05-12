import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { RolesEnum } from "../roles.enum";

// Custom Guard to be used in the routes to allow access only to passed roles
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<string[]>("roles", context.getHandler()); // get roles from the decorator @Roles()

    const request = context.switchToHttp().getRequest(); // get the request object

    const authHeaderTokenValue = request.headers?.authorization?.split(" ")[1]; // get the token from the request

    const userInToken = this.jwtService.decode(authHeaderTokenValue); // decode the token to get the user data

    if (!userInToken) { // if the token is invalid
      return false;
    }

    request.user = userInToken; // add the user data to the request object

    return roles.includes(userInToken["role"]); // check if the user role is in the roles array
  }
}
