import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ProductsService } from "./products.service";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getProducts() {
    return [
      {
        id: "abc13",
        name: "Tomato",
      },
    ];
  }

  @Post()
  createProduct(@Body() body: any) {
    this.productsService.createProduct(body);
  }
}
