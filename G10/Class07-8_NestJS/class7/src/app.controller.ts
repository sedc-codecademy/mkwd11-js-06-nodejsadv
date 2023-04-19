import { Controller, Get, Req, Request, Response, Res, Next, Headers, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@Req() req: Request, @Res() res: Response, @Next() next: Next): string {
  //   console.log('req', req);

  //   console.log('res', res);
  //   // @ts-ignore
  //   // res.status(200).send('nesto');
  //   // res.status(200).send('')
  //   return this.appService.getHello();
  // }

  // // get all
  // router.get('', () => {})
  // // get filted
  // router.get('', () => {})

  // @Get('test1')
  // testOne() {
  //   return 'Test one';
  // }

  // @Get('test2')
  // testTwo() {
  //   return 'Test two';
  // }

  // @Get()
  // getHeaders(@Headers() headers: Headers) {
  //   console.log(headers);
  //   return 'headers';
  // }

  // @Get(':name')
  // getByName(@Param('name') name: string): string {
  //   return name;
  // }

  // @Post()
  // addUser(@Body() user: any): any {
  //   return user;
  // }
}
