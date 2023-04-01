import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    order_date: {
        type: String
    },

    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product" // Will give us access to populate method
            // will reference to the Product document with the coresponding id
        }
    ]
});

export default orderSchema;