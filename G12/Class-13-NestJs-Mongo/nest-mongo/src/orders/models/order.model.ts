import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from 'src/products/models/product.model';

// Alaways add this line to allow typescript and nestjs to work with mongoose
export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  // always add name which will not be part of the document but is needed for mongoose to work with nestjs
  @Prop()
  name: string;

  @Prop()
  amount: number;

  @Prop()
  user: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  products: Product[];
}

// Schema is needed to connect model with module
export const OrderSchema = SchemaFactory.createForClass(Order);
