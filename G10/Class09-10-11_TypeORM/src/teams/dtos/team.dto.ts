import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator";
import { Team } from "../interfaces/team.interface";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmptyArray } from "../../common/validators/is-not-empty-array.validator";
import { Type } from "class-transformer";

export class TeamStadiumDetailsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "The name of the stadium",
    example: "Allianz Arena",
    required: true,
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: "The capacity of the stadium",
    example: 75000,
    required: true,
  })
  capacity: number;
}

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

  @IsString({ each: true })
  @IsArray()
  @IsNotEmptyArray()
  @IsNotEmpty()
  @ApiProperty({
    type: [String],
    description: "The colors od the team jersey",
    required: true,
    example: ["white", "black"],
  })
  jerseyColors: string[];

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => TeamStadiumDetailsDto)
  @ApiProperty({
    type: TeamStadiumDetailsDto,
    description: "The stadium details",
    required: true,
  })
  stadiumDetails: TeamStadiumDetailsDto;
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
