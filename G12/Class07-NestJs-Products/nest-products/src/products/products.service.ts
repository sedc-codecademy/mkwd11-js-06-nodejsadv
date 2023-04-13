import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dtos/create-product.dto';
import { v4 as uuid } from 'uuid';
import { UpdateProductDto } from './dtos/update-product.dto';
// In case you get a type declaration file error use this command in the terminal to install all the types for uuid
// npm i --save-dev @types/uuid

@Injectable()
export class ProductsService {
  async getAllProducts(title?: string) {
    const productsJson = await readFile(
      join(process.cwd(), 'src', 'products', 'data', 'products.json'),
      'utf-8',
    );

    let products: Product[] = JSON.parse(productsJson);

    if (title) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(title.toLowerCase()),
      );
    }

    return products;
  }

  async saveProducts(products: Product[]) {
    await writeFile(
      join(process.cwd(), 'src', 'products', 'data', 'products.json'),
      JSON.stringify(products, null, 2),
    );
  }

  async getProductById(productId: string) {
    const products = await this.getAllProducts();

    const foundProduct = products.find((product) => product.id === productId);

    if (!foundProduct) throw new NotFoundException('Product not found');

    return foundProduct;
  }

  async createProduct(productData: CreateProductDto) {
    const products = await this.getAllProducts();

    const newProduct: Product = {
      ...productData,
      id: uuid(),
    };

    products.push(newProduct);

    await this.saveProducts(products);

    return newProduct;
  }

  async updateProduct(productId: string, updateData: UpdateProductDto) {
    console.log('From update product method', updateData);

    const products = await this.getAllProducts();

    const foundProduct = await this.getProductById(productId);

    Object.assign(foundProduct, updateData);

    const updatedProducts = products.map((product) =>
      product.id === foundProduct.id ? foundProduct : product,
    );

    await this.saveProducts(updatedProducts);

    // return foundProduct;
  }
  async deleteProduct(productId: string) {
    const products = await this.getAllProducts();

    const updatedProducts = products.filter(
      (product) => product.id !== productId,
    );

    if (products.length === updatedProducts.length)
      throw new NotFoundException('Product not found');

    await this.saveProducts(updatedProducts);
  }

  async deleteAllProducts() {
    await this.saveProducts([]);
  }
}
