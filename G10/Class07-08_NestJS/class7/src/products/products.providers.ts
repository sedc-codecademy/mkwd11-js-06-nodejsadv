import { Connection } from 'mongoose';
import { ProductSchema } from './products.schema';

export const productsProviders = [
  {
    provide: 'PRODUCT_MODEL', // this string needs to be unique in each provider, and same as the Inject value in the Project Service
    useFactory: (connection: Connection) =>
      connection.model('Product', ProductSchema),
    inject: ['DATABASE_CONNECTION'], // database connection string is used to connect to our Mongo DB instance
  },
];
