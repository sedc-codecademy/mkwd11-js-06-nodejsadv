import { Injectable } from '@nestjs/common';

// To be able to use a service class like this we add @Injectable()
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from G12!';
  }

  getData() {
    return {
      title: 'Shoes',
      stock: 100,
      price: 100,
    };
  }
}
