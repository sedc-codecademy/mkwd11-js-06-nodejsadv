import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

// mongodb+srv://borisovskiborce:password1234@cluster0.gpnlxiv.mongodb.net/adv-node?retryWrites=true&w=majority

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: 'mongodb+srv://borisovskiborce:password1234@cluster0.gpnlxiv.mongodb.net/adv-node?retryWrites=true&w=majority',
        };
      },
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
