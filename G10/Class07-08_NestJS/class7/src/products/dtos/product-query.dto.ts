import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export class ProductQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: 'Orange',
  })
  title?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    example: 10,
    default: 10,
  })
  size?: number = 10;

  @IsEnum(SortDirection)
  @IsOptional()
  @ApiPropertyOptional({
    type: 'enum',
    enum: SortDirection,
    description: 'The sort direction',
    example: SortDirection.ASC,
  })
  sortDirection?: SortDirection;
}
