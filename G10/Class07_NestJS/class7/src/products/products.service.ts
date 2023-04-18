import { Injectable } from "@nestjs/common";
import { Product } from './interfaces/product'

@Injectable()
export class ProductsService {
    constructor() {}

    getProducts(): any {
        console.log('in service')
        return [{
            title: "Orange",
            price: 10
        }]
    }

    createProduct(product: Product) {
        return product;
    }
}