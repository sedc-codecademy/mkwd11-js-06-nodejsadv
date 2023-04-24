import { Schema } from 'mongoose';
import { ProductStatus } from './interfaces/product';

export const ProductSchema = new Schema({
  id: String,
  title: String,
  price: Number,
  description: String,
  colors: [String],
  status: {
    type: String,
    enum: Object.keys(ProductStatus), //['available', 'unavailable'],
  },
});
