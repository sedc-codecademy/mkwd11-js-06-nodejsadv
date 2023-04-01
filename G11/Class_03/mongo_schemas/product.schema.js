import mongoose from "mongoose";

const { Schema } = mongoose;

/**
 * Thanks to this schema
 * all of the product records will have the same properties
 * they will have the same data structure as the schema
 */
const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

export default productSchema;