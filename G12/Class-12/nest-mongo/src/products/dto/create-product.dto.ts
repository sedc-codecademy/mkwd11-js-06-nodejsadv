import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  price: number;
}
