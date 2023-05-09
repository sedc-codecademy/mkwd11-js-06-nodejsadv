import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CarCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The brand of the car',
    type: String,
    example: 'Opel',
  })
  brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The model of the car',
    type: String,
    example: 'Astra',
  })
  model: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The year of the car manufacture',
    type: Number,
    example: 2022,
  })
  year: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The price of the car',
    type: Number,
    example: 10000,
  })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The color of the car',
    type: String,
    example: 'yellow',
  })
  color: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The availability of the car',
    type: Boolean,
    example: true,
  })
  isAvailable: boolean;
}

export class CarUpdateDto extends CarCreateDto {}

export class CarResponseDto extends CarCreateDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The id of the car',
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'The date the car was created',
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date the car was updated',
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The date the car was deleted',
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
  })
  deletedAt?: Date;
}

export class CarQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Search by the brand of the car',
    type: String,
    example: 'Opel',
  })
  brand?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    description: 'Search by the year of the car',
    type: String,
    example: 2023,
  })
  year?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Search by the color of the car',
    type: String,
    example: 'white',
  })
  color?: string;
}
