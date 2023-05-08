import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Hello from the other side', user: 'Borisovski Borche' };
  }

  getProducts(): { products: Product[] } {
    return {
      products: [
        {
          title: 'Shoes',
          price: 199,
          stock: 54,
        },
        {
          title: 'Machines',
          price: 24000,
          stock: 2,
        },
        {
          title: 'Cars',
          price: 20000,
          stock: 3,
        },
        {
          title: 'Tanks',
          price: 5000000,
          stock: 1,
        },
      ],
    };
  }
}
