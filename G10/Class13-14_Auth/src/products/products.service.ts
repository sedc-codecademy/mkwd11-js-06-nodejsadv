import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { ProductCreateDto } from "./dtos/product.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  createProduct(body: ProductCreateDto, creatorEmail: string) {
    const newProduct = {
      ...body,
      createdBy: creatorEmail,
    };
    return this.productRepository.save(newProduct);
  }
}
