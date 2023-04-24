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

  @Get()
  @UsePipes(ValidationPipe) // this is necessary to use the full potential of the class-validators. It will enable proper error returns
  // ApiResponse is used to describe the successful response
  @ApiResponse({
    status: 200,
    description: 'The found products',
  })
  // @Query() will get the full query object. example ?title=test&sort=asc will result in:
  // { title: 'test', sort: 'asc' }
  getProducts(@Query() query: ProductQueryDto): Promise<ProductResponseDto[]> {
    return this.productsService.getProducts(query);
  }

  @Post()
  @UsePipes(ValidationPipe) // this is necessary to use the full potential of the class-validators. It will enable proper error returns
  @ApiCreatedResponse({
    status: 201,
    description: 'The created product',
  })
  createProduct(
    @Body() product: ProductCreateDto,
  ): Promise<ProductResponseDto> {
    return this.productsService.createProduct(product);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'The product has been updated',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'The product has not been found',
  })
  updateProduct(
    @Param('id') id: string,
    @Body() updateData: ProductUpdateDto,
  ): Promise<ProductResponseDto> {
    return this.productsService.updateProduct(id, updateData);
  }
}
