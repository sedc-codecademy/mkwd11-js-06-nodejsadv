import { SetMetadata } from "@nestjs/common";
import { RolesEnum } from "../roles.enum";

// Custom Decorator to be used in the routes to allow access only to passed roles
export const Roles = (...roles: RolesEnum[]) => SetMetadata("roles", roles);
