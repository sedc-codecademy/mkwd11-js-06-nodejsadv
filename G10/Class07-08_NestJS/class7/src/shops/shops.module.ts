import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}
