import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product';
import { Model } from 'mongoose';
import {
  ProductCreateDto,
  ProductResponseDto,
  ProductUpdateDto,
} from './dtos/product.dto';
import { ProductQueryDto, SortDirection } from './dtos/product-query.dto';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL') private productModel: Model<Product>,
    private readonly logger: PinoLogger,
  ) {}

  getProducts(query: ProductQueryDto): Promise<ProductResponseDto[]> {
    this.logger.info('getProducts called');
    return this.productModel
      .find({
        title: { $regex: query?.title ?? '', $options: 'i' }, // used to enable searching by characters within the title of the product
      })
      .limit(query.size) // used to get certain amount of products
      .sort({ title: query?.sortDirection ?? SortDirection.ASC }); // used to sort items by title
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
      this.logger.error(`The product with id: ${id} is not found`);
      throw new NotFoundException(`The product with id: ${id} is not found`);
    }

    return this.productModel.findByIdAndUpdate(id, updateData, {
      new: true, // used to return the updated value
      runValidators: true, // used to enable Mongoose Schema validators
    });
  }
}
