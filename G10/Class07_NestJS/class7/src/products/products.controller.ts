import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProductsService } from './products.service'
import { Product } from './interfaces/product'

@Controller('/products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts()
    }

    @Post()
    createProduct(@Body() product: Product): Product {
        return this.productsService.createProduct(product)
    }


}