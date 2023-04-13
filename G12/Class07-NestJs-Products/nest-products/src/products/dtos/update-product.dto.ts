import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @Length(3, 30)
  @IsOptional()
  title: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stock: number;

  @IsNumber()
  @IsOptional()
  price: number;
}
