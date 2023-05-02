import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from "class-validator";
import { Player } from "../interfaces/player.interface";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class PlayerCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The name of the player",
    example: "Lionel Messi",
  })
  name: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: "The age of the player",
    example: 20,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The position in which the player plays",
    example: "ST",
  })
  position: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    required: false,
    description: "The team id in which the player plays",
    example: "iuybegu7ithy2t1e",
  })
  teamId?: string;
}

export class PlayerResponseDto extends PlayerCreateDto implements Player {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The ID of the player",
    example: "uhdagiuge2",
  })
  id: string;
}

export class PlayerAddToTeamDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  playerId: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsUUID()
  @IsNotEmpty()
  teamId: string;
}
