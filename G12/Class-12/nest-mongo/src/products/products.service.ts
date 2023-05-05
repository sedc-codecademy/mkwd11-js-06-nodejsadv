import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './models/product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);

    const response = await newProduct.save();

    return response;
  }

  findAll() {
    return this.productModel.find({});
  }

  async findOne(id: string) {
    try {
      const product = await this.productModel.findById(id);

      if (!product) throw new NotFoundException('Product not found');

      return product;
    } catch (err) {
      throw new NotFoundException('Product not found');
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);

    Object.assign(product, updateProductDto);

    await product.save();

    return product;
  }

  async remove(id: string) {
    const res = await this.productModel.findByIdAndDelete(id);

    return res;
  }
}
