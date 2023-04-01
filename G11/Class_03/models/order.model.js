import mongoose from "mongoose";
import orderSchema from "../mongo_schemas/order.schema.js";

class OrdersModel {
    mongo_model;

    constructor(){
        this.mongo_model = mongoose.model("Order", orderSchema);
    }

    async getAllOrders(){
        const orders = await this.mongo_model.find().populate('items'); 
        //populate will take the ID VALUE and replace it with the real object from the Product Model

        return orders
    }
    
    async getOrderById(orderId){
        const order = await this.mongo_model.findById(orderId).populate('items');

        return order
    }

    async addOrder(orderData){
        const order = new this.mongo_model(orderData);

        await order.save()
    }

    async deleteOrder(orderId){
        await this.mongo_model.findByIdAndDelete(orderId)
    }
};

export default OrdersModel