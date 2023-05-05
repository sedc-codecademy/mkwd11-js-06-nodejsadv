import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Alaways add this line to allow typescript and nestjs to work with mongoose
export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  // always add name which will not be part of the document but is needed for mongoose to work with nestjs
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  stock: number;

  @Prop()
  price: number;
}

// Schema is needed to connect model with module
export const ProductSchema = SchemaFactory.createForClass(Product);
