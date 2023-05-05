import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  amount: number;

  @IsString()
  user: string;

  @IsArray()
  products: string[];
}
