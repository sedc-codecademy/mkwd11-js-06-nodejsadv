import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
  SetMetadata,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProductsService } from "./products.service";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { RolesEnum } from "../auth/roles.enum";
import { Roles } from "../auth/decorators/roles.decorator";
import { ProductCreateDto } from "./dtos/product.dto";
import { GetUser } from "src/auth/decorators/get-user.decorator";
import { UserResponseDto } from "src/auth/dtos/auth.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiBearerAuth() // Locking the whole controller with JWT on Swagger (the lock will appear)
@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @SetMetadata("roles", [RolesEnum.admin]) // Setting metadata for the whole controller instead of using @Roles
  @Roles(RolesEnum.admin, RolesEnum.editor, RolesEnum.user) // Custom decorator that sets metadata
  @UseGuards(JwtAuthGuard, RolesGuard)
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

  @Roles(RolesEnum.admin, RolesEnum.editor) // The list of user roles that can access this endpoint
  @UseGuards(JwtAuthGuard, RolesGuard) // The list of guards that will be applied to this endpoint
  @Post()
  @UsePipes(ValidationPipe)
  createProduct(
    @GetUser() user: UserResponseDto,
    @Body() body: ProductCreateDto
  ) {
    console.log("user", user);
    this.productsService.createProduct(body, user.username);
  }
}
