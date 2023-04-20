import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ProductCreateDto,
  ProductResponseDto,
  ProductUpdateDto,
} from './dtos/product.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductQueryDto } from './dtos/product-query.dto';

@ApiTags('Products')
@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiResponse({
    status: 200,
    description: 'The found products',
  })
  @Get()
  getProducts(@Query() query: ProductQueryDto): Promise<ProductResponseDto[]> {
    return this.productsService.getProducts(query);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    status: 201,
    description: 'The created product',
  })
  createProduct(
    @Body() product: ProductCreateDto,
  ): Promise<ProductResponseDto> {
    return this.productsService.createProduct(product);
  }

  @ApiResponse({
    status: 200,
    description: 'The product has been updated',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'The product has not been found',
  })
  @Put(':id')
  @UsePipes(ValidationPipe)
  updateProduct(
    @Param('id') id: string,
    @Body() updateData: ProductUpdateDto,
  ): Promise<ProductResponseDto> {
    return this.productsService.updateProduct(id, updateData);
  }
}
