import { IsNumber, IsString } from 'class-validator';

export class CreateManagerDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @IsNumber()
  salary: number;

  @IsNumber()
  yearsOfExperience: number;
}
