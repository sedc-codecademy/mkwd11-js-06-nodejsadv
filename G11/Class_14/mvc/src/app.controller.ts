import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Res() res: Response) {
    // res.render('index', {
    //   title: 'This is main page.',
    //   description:
    //     'Some dummy message Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, eos',
    // });

    const viewValues = {
      title: 'This is main page',
      description:
        'Some dummy message Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, eos',
    };

    return viewValues;
  }

  @Get('products')
  @Render('products/index')
  getProducts(@Res() res: Response) {
    // res.render('products/index'); //old way

    const products = this.appService.getProducts();

    return {
      title:
        'Hello, this is the procuts page, and i took the place of myMassage property',
      description: 'Some dummy description, this and that',
      products: products,
    };
  }
}
