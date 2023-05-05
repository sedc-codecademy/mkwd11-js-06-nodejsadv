import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

// Two ways to define middleware in nest js

// 1.The first is class that must have the use method inside
export class LoggerMiddleware implements NestMiddleware {
  productsCount = 0;

  use(req: Request, res: Response, next: NextFunction) {
    console.log('From the class logger middleware');

    // By using the class we can count the number of visits using a class property, the count will refresh if the server restarts
    if (req.url.includes('/products') && req.method === 'GET')
      this.productsCount++;

    console.log(
      `The current number of visits to products is: ${this.productsCount}`,
    );

    return next();
  }
}

// 2. The second is to simply use a function that is the same as in express only has typescript added to it
export const loggedMiddlewareFunc = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('From the function logger middleware');

  return next();
};
