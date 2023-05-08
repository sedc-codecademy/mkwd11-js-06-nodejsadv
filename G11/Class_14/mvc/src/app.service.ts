import { Injectable } from '@nestjs/common';
export interface Product {
  id: string;
  name: string;
  price: number;
}
@Injectable()
export class AppService {
  products: Product[] = [
    { id: '1', name: 'Bananas', price: 80 },

    { id: '2', name: 'Starberries', price: 60 },

    { id: '3', name: 'Pineapple', price: 120 },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getProducts() {
    return this.products;
  }
}
