import { UserService } from "./user.service";
import { Controller, Param, Patch, UseGuards } from "@nestjs/common";
import { UserRolesParamsDto } from "./dtos/user-roles-params.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(":id/role/:role")
  updateUserRole(@Param() { id, role }: UserRolesParamsDto) {
    return this.userService.updateUserRole(id, role);
  }
}
