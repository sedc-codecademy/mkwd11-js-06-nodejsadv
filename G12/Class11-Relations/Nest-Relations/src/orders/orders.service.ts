import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrdersService {
  @InjectRepository(Order) private ordersRepo: Repository<Order>;

  findAllOrders() {
    return this.ordersRepo.find();
  }

  async findOrderById(id: number) {
    const order = await this.ordersRepo.findOne({
      where: { id },
      relations: {
        // By setting relations like this to true typeorm loads the data of the relations automatically
        user: true,
        products: true,
      },
    });
    if (!order) throw new NotFoundException('Order not found');

    return order;
  }

  async createOrder(orderData: CreateOrderDto) {
    const newOrder = this.ordersRepo.create({
      amount: orderData.amount,
      user: { id: orderData.userId },
      products: orderData.productIds.map((productId) => {
        return { id: productId };
      }),
    });

    await this.ordersRepo.save(newOrder);

    return newOrder;
  }
}
