import { Injectable, Inject } from "@nestjs/common";
import { Product } from './interfaces/product'
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
    constructor(
        @Inject('PRODUCT_MODEL') private productModel: Model<Product>
    ) {}

    getProducts(): Promise<Product[]> {
        // return [{
        //     title: "Orange",
        //     price: 10
        // }]

        return this.productModel.find()
    }

    createProduct(product: Product): Promise<Product> {
        // return product;

        return this.productModel.create(product)
    }
}