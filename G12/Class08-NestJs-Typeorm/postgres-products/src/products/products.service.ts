import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductsService {
  @InjectRepository(Product) private productsRepo: Repository<Product>;

  findAllProducts() {
    return this.productsRepo.find({});
  }

  async findProductById(id: number) {
    const product = await this.productsRepo.findOneBy({ id });

    if (!product) throw new NotFoundException('Product not found');

    return product;
  }

  async createProduct(productData: CreateProductDto) {
    const newProduct = this.productsRepo.create(productData);

    await this.productsRepo.save(newProduct);

    return newProduct;
  }

  async updateProduct(productId: number, updateData: UpdateProductDto) {
    const product = await this.findProductById(productId);

    Object.assign(product, updateData);

    await this.productsRepo.save(product);
  }
}
