import { Injectable, Inject } from '@nestjs/common';
import { Product } from './interfaces/product';
import { Model } from 'mongoose';
import { ProductCreateDto, ProductResponseDto } from './dtos/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL') private productModel: Model<ProductResponseDto>,
  ) {}

  getProducts(): Promise<ProductResponseDto[]> {
    return this.productModel.find();
  }

  createProduct(product: ProductCreateDto): Promise<ProductResponseDto> {
    return this.productModel.create(product);
  }
}
