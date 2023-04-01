import OrdersModel from "../models/order.model.js";

const orderModel = new OrdersModel();

class OrdersContoller {
    async getAllOrder(req, res){
        const orders = await orderModel.getAllOrders();
        
        res.send(orders)
    }

    async getOrderById(req, res){
        const orderId = req.params.id;

        const order = await orderModel.getOrderById(orderId)

        res.send(order)
    }

    async addOrder(req, res){
        const { productIds } = req.body;

        const orderData = {
            order_date: new Date().toLocaleDateString(),
            items: productIds
        }

        await orderModel.addOrder(orderData)

        res.status(201).send({message: "Order was created."})
    }

    async deleteOrder(req, res){
        const orderId = req.params.id;

        await orderModel.deleteOrder(orderId);

        res.send({message: `Order with id: ${orderId} was deleted`})
    }
}

export default OrdersContoller