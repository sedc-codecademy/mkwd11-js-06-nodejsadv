import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './models/order.model';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  findAll() {
    return this.orderModel.find({});
  }

  async findOne(id: string) {
    try {
      const order = await this.orderModel.findById(id).populate('products');

      if (!order) throw new NotFoundException('Order not found');
      return order;
    } catch (error) {
      throw new NotFoundException('Order not found');
    }
  }

  async create(createOrderDto: CreateOrderDto) {
    const newOrder = new this.orderModel(createOrderDto);

    const response = await newOrder.save();

    return response;
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
