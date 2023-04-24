import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Product, ProductStatus } from './../interfaces/product';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductCreateDto {
  // used to validate property
  @IsString()
  @IsNotEmpty()

  // used to document property (in swagger)
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
    type: Number, // 'number' is valid also
    description: 'The price of the product',
    example: 10,
  })
  price: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String, // 'string' is valid also
    description: 'The product description',
    example: 'This is a nice orange',
    required: false,
  })
  description?: string;

  @IsString({ each: true }) // validate each item in the array, making sure if the item is string
  @IsArray()
  @ApiProperty({
    type: [String],
    description: 'The colors in which the product is available in',
    example: ['white', 'green'],
  })
  colors: string[];

  @IsString()
  @IsNotEmpty()
  @IsEnum(ProductStatus)
  @ApiProperty({
    type: 'enum',
    enum: ProductStatus,
    description: 'The status of the product',
    example: ProductStatus.available,
  })
  status: ProductStatus;
}

export class ProductResponseDto extends ProductCreateDto implements Product {
  // extends will take all properties, validations and documentations from ProductCreateDto
  // implements will make sure we follow the structure of the Project interface

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The id of the product',
    example: '643ee2209fcc9bc1502898cb',
  })
  id: string;
}

export class ProductUpdateDto extends ProductCreateDto {
  // implements everything from ProductCreateDto
}
