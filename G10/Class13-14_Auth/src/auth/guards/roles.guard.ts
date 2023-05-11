import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { RolesEnum } from "../roles.enum";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeaderTokenValue = request.headers?.authorization?.split(" ")[1];

    console.log("authheader", authHeaderTokenValue);

    const userInToken = this.jwtService.decode(authHeaderTokenValue);

    console.log("userInToken", userInToken);

    if (!userInToken) {
      return false;
    }

    return userInToken["role"] === RolesEnum.admin;
  }
}
