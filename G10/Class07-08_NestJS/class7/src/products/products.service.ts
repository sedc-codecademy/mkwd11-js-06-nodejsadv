import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product';
import { Model } from 'mongoose';
import {
  ProductCreateDto,
  ProductResponseDto,
  ProductUpdateDto,
} from './dtos/product.dto';
import { ProductQueryDto } from './dtos/product-query.dto';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_MODEL') private productModel: Model<Product>) {}

  getProducts(query: ProductQueryDto): Promise<ProductResponseDto[]> {
    return this.productModel.find();
  }

  getProduct(id: string): Promise<ProductResponseDto> {
    return this.productModel.findById(id);
  }

  createProduct(product: ProductCreateDto): Promise<ProductResponseDto> {
    return this.productModel.create(product);
  }

  async updateProduct(
    id: string,
    updateData: ProductUpdateDto,
  ): Promise<ProductResponseDto> {
    const product = await this.getProduct(id);

    if (!product) {
      throw new NotFoundException(`The product with id: ${id} is not found`);
    }

    return this.productModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }
}
