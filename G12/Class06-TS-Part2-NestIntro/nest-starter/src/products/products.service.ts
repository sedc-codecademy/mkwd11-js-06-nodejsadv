import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {
  getAllProducts(): Product[] {
    return [
      {
        id: uuid(),
        title: 'shoes',
        stock: 100,
        price: 400,
      },
      {
        id: uuid(),
        title: 'shoes',
        stock: 100,
        price: 400,
      },
      {
        id: uuid(),
        title: 'shoes',
        stock: 100,
        price: 400,
      },
      {
        id: uuid(),
        title: 'shoes',
        stock: 100,
        price: 400,
      },
    ];
  }
}
