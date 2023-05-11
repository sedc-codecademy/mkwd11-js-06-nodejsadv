import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ProductsService } from "./products.service";
import { RolesGuard } from "src/auth/guards/roles.guard";

@ApiBearerAuth()
@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(RolesGuard)
  @Get()
  getProducts(@Headers() headers: Headers) {
    console.log(headers);

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
