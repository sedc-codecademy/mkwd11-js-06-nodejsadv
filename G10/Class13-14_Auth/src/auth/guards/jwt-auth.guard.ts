import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// Custom Auth Guard to be used in the routes
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {}
