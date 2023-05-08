import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsNumber()
  ranking: number;

  @IsNumber()
  budget: number;

  @IsNumber()
  @IsOptional()
  manager: number;
}
