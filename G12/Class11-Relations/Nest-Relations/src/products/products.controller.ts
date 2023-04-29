import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/products-filters.interface';

// @UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('orderBy') orderBy: 'stock' | 'price',
  ) {
    const filters: ProductFilters = {
      title,
      inStock: !!inStock,
      orderBy,
    };

    return this.productsService.findAllProducts(filters);
  }

  @Get('/:id')
  getProductById(@Param('id') productId: string) {
    return this.productsService.findProductById(Number(productId));
  }

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    return this.productsService.createProduct(productData);
  }

  @Patch('/:id')
  updateProduct(
    @Param('id') productId: string,
    @Body() updateData: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(Number(productId), updateData);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') productId: string) {
    return this.productsService.removeProduct(Number(productId));
  }
}
