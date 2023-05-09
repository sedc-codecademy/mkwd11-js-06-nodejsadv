import { Injectable, Inject } from '@nestjs/common';
import { Car } from './car.entity';
import { Repository, ILike, MoreThanOrEqual } from 'typeorm';
import {
  CarCreateDto,
  CarQueryDto,
  CarResponseDto,
  CarUpdateDto,
} from './dtos/car.dto';

@Injectable()
export class CarsService {
  constructor(
    @Inject('CAR_REPOSITORY')
    private playerRepository: Repository<Car>,
  ) {}
  async getAllCars({
    brand,
    color,
    year,
  }: CarQueryDto): Promise<CarResponseDto[]> {
    let whereQuery = {};

    if (brand) {
      whereQuery = { ...whereQuery, brand: ILike(`%${brand}%`) };
    }

    if (color) {
      whereQuery = { ...whereQuery, color };
    }

    if (year) {
      whereQuery = { ...whereQuery, year: MoreThanOrEqual(year) };
    }

    return this.playerRepository.find({
      where: whereQuery,
    });
  }

  async getCar(id: string): Promise<CarResponseDto> {
    return this.playerRepository.findOne({ where: { id } });
  }

  async createCar(car: CarCreateDto): Promise<CarResponseDto> {
    return this.playerRepository.save(car);
  }

  async updateCar(id: string, car: CarUpdateDto): Promise<CarResponseDto> {
    return this.playerRepository.save({ ...car, id: id });
  }

  async updateCarPrice(id: string, price: number): Promise<CarResponseDto> {
    const car = await this.playerRepository.findOne({ where: { id } });
    car.price = price;
    return this.playerRepository.save(car);
  }

  async updateCarColor(id: string, color: string): Promise<CarResponseDto> {
    const car = await this.playerRepository.findOne({ where: { id } });
    car.color = color;
    return this.playerRepository.save(car);
  }

  async updateCarAvailability(
    id: string,
    availability: boolean,
  ): Promise<CarResponseDto> {
    const car = await this.playerRepository.findOne({ where: { id } });
    car.isAvailable = availability;
    return this.playerRepository.save(car);
  }

  async deleteCar(id: string): Promise<void> {
    await this.playerRepository.softDelete(id);
  }
}
