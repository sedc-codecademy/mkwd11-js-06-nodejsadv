import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { Team } from "../interfaces/team.interface";
import { ApiProperty } from "@nestjs/swagger";

export class TeamCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The name of the Team",
    example: "PSG",
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The location of the team",
    example: "Paris, France",
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The league in which the team plays in",
    example: "League 1",
  })
  league: string;
}

export class TeamResponseDto extends TeamCreateDto implements Team {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: String,
    description: "The id of the team",
    example: "uyitg21u6",
  })
  id: string;
}
