import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [DatabaseModule, AuthModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
