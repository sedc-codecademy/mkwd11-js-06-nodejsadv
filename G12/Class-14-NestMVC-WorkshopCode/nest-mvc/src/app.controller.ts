import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './interfaces/product.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return this.appService.getHello();
  }

  @Get('/products')
  @Render('products/index')
  getProducts(): { products: Product[] } {
    return this.appService.getProducts();
  }
}
