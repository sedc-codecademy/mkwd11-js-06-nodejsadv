import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(2, 20)
  firstName: string;

  @IsOptional()
  @IsString()
  @Length(2, 20)
  lastName: string;

  @IsOptional()
  @IsNumber()
  @Min(18)
  age: number;

  @IsOptional()
  @IsString()
  role: 'admin' | 'user';
}
