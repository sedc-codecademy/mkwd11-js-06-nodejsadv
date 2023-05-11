import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { RolesEnum } from "src/auth/roles.enum";

export class UserRolesParamsDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: `Users ID`,
    required: true,
  })
  id: string;

  @IsEnum(RolesEnum)
  @IsNotEmpty()
  @ApiProperty({
    description: "Users new role",
    enum: RolesEnum,
    required: true,
    default: RolesEnum.user, // just for documentation (swagger)
  })
  role: RolesEnum = RolesEnum.user; // the actual value to be used
}
