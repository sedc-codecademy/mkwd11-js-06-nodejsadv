import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAllOrders() {
    return this.ordersService.findAllOrders();
  }

  @Get('/:id')
  getOrderById(@Param('id') orderId: string) {
    return this.ordersService.findOrderById(Number(orderId));
  }

  @Post()
  createOrder(@Body() orderData: CreateOrderDto) {
    return this.ordersService.createOrder(orderData);
  }
}
