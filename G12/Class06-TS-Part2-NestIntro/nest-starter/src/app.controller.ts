import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // To avoid creating multiple instances in project
  // appService = new AppService();

  // We can add dependency classes only if they have the @Injectable() decorator
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data')
  getData() {
    return this.appService.getData();
  }

  @Post('/data')
  createData(@Body() body: any) {
    console.log(body);

    return 'Data has been created';
  }

  @Patch('/data/:id')
  updateData(@Param('id') id: string) {
    console.log(id);

    return `The id is: ${id} and it has been extracted`;
  }
}
