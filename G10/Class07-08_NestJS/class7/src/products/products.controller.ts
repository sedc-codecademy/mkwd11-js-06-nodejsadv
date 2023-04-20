import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product';
import { ProductCreateDto, ProductResponseDto } from './dtos/product.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiResponse({
    status: 200,
    description: 'The found products',
  })
  @Get()
  getProducts(): Promise<ProductResponseDto[]> {
    return this.productsService.getProducts();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProduct(
    @Body() product: ProductCreateDto,
  ): Promise<ProductResponseDto> {
    return this.productsService.createProduct(product);
  }
}
