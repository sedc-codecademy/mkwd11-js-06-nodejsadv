import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/products-filters.interface';

@Injectable()
export class ProductsService {
  @InjectRepository(Product) private productsRepo: Repository<Product>;

  findAllProducts(filters: ProductFilters) {
    const filterConfig: FindManyOptions<Product> = {};

    if (filters.title)
      filterConfig.where = { ...filterConfig.where, title: filters.title };

    if (filters.inStock)
      filterConfig.where = { ...filterConfig.where, stock: MoreThan(0) };

    if (filters.orderBy) {
      if (filters.orderBy === 'stock') filterConfig.order = { stock: 'ASC' };
      if (filters.orderBy === 'price') filterConfig.order = { price: 'ASC' };
    }
    return this.productsRepo.find(filterConfig);
  }

  async findProductById(id: number) {
    const product = await this.productsRepo.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });

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

  async removeProduct(productId: number) {
    const product = await this.findProductById(productId);

    await this.productsRepo.remove(product);
  }
}
