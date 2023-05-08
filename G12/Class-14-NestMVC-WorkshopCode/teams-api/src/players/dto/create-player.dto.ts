import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  salary: number;

  @IsNumber()
  ranking: number;

  @IsOptional()
  @IsNumber()
  team: number;
}
