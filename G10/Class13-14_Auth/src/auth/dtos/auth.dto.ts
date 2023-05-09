import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    description: "Users email",
    example: "test@mail.com",
    required: true,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    type: String,
    description: "Users password",
    example: "Password123",
    required: true,
  })
  password: string;
}

export class UserRegisterDto extends UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "Users name and surname",
    example: "John Doe",
    required: true,
  })
  name: string;
}

export class UserResponseDto extends UserRegisterDto {
  @ApiProperty({
    type: String,
    description: "Users id",
  })
  id: string;

  @ApiProperty({
    type: Date,
  })
  createdAt!: Date;

  @ApiProperty({
    type: Date,
  })
  updatedAt!: Date;

  @ApiProperty({
    type: Date,
  })
  deletedAt?: Date;
}

export class LoginResponseDto {
  @ApiProperty({
    type: UserResponseDto,
  })
  user: UserResponseDto;

  @ApiProperty({
    type: String,
    description: "The access Bearer token",
  })
  accessToken: string;
}
