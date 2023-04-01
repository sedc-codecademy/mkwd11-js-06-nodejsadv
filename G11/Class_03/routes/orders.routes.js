import { Router } from "express";
import OrdersContoller from "../controllers/orders.controller.js";

const ordersController = new OrdersContoller();

const orderRouter = Router();

// GET ORDERS
orderRouter.get('/', ordersController.getAllOrder);

// GET ORDER BY ID
orderRouter.get('/:id', ordersController.getOrderById);

// CREATE ORDER
orderRouter.post("/", ordersController.addOrder);

// REMOVE ORDER
orderRouter.delete('/', ordersController.deleteOrder);

export default orderRouter;