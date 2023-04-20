import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

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
}
