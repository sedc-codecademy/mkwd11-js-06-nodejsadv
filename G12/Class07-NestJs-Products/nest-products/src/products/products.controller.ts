import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //   If you add the @Res express response you have to return express syntax such as res.sendStatus or res.send otherwise the endpoint will stop working, only use the @Req or @Res if you need to do something that nest doesn't do by default
  @Get()
  getAllProducts(@Req() req: Request, @Query('title') title: string) {
    console.log(req);

    // res.sendStatus(200);
    return this.productsService.getAllProducts(title);
  }

  @Get('/:id')
  getProductById(@Param('id') productId: string) {
    return this.productsService.getProductById(productId);
  }

  @Post()
  @HttpCode(201)
  createProduct(@Body() productData: CreateProductDto) {
    return this.productsService.createProduct(productData);
  }

  @Patch('/:id')
  @HttpCode(204)
  updateProduct(
    @Param('id') productId: string,
    @Body() updateData: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(productId, updateData);
  }

  @Delete('/:id')
  deleteProduct(@Param() productId: string) {
    return this.productsService.deleteProduct(productId);
  }

  @Delete()
  deleteAllProducts() {
    return this.productsService.deleteAllProducts();
  }
}
