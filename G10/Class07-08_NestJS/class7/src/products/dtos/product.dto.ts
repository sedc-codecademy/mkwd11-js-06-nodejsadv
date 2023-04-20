import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Product } from './../interfaces/product';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The title of the product',
    example: 'Orange',
  })
  title: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty({
    type: Number,
    description: 'The price of the product',
    example: 10,
  })
  price: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    description: 'The product description',
    example: 'This is a nice orange',
    required: false,
  })
  description?: string;
}

export class ProductResponseDto extends ProductCreateDto implements Product {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The id of the product',
    example: '643ee2209fcc9bc1502898cb',
  })
  id: string;
}
