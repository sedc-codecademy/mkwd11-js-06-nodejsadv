import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  Max,
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

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(99)
  @ApiProperty({
    type: Number,
    required: true,
    description: "The shirt number of the player",
    example: 10,
  })
  number: number;

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

  @ApiProperty({
    type: Date,
    required: true,
    description: "Date and time when player has been created",
    example: "2023-05-02T18:24:24.713Z",
  })
  createdAt!: Date;

  @ApiProperty({
    type: Date,
    required: true,
    description: "Date and time when player has been updated",
    example: "2023-05-02T18:24:24.713Z",
  })
  updatedAt!: Date;

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: "Date and time when player has been deleted",
    example: "2023-05-02T18:24:24.713Z",
  })
  deletedAt?: Date;
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
