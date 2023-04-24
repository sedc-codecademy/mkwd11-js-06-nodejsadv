import { ShopsModule } from './shops/shops.module';
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { PurchasesModule } from './purchases/purchases.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot(),
    ProductsModule,
    PurchasesModule,
    ShopsModule,
  ], // used to import all other modules
  controllers: [], // used to import controllers
  providers: [], // used to import services and providers
})
export class AppModule {} // this is the main module of the app
