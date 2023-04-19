import { Schema } from "mongoose"

export const ProductSchema = new Schema({
    id: String,
    title: String,
    price: Number,
    description: String
})