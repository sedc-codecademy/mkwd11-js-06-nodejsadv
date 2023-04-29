import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  amount: number;

  @IsString()
  userId: string;

  @IsArray()
  productIds: number[];
}
