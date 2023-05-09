import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  CarCreateDto,
  CarQueryDto,
  CarResponseDto,
  CarUpdateDto,
} from './dtos/car.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  @UsePipes(ValidationPipe)
  getCars(@Query() query: CarQueryDto): Promise<CarResponseDto[]> {
    return this.carsService.getAllCars(query);
  }

  @Get(':id')
  getCar(@Param('id') id: string): Promise<CarResponseDto> {
    return this.carsService.getCar(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() car: CarCreateDto): Promise<CarResponseDto> {
    return this.carsService.createCar(car);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateCar(
    @Param('id') id: string,
    @Body() car: CarUpdateDto,
  ): Promise<CarResponseDto> {
    return this.carsService.updateCar(id, car);
  }

  @Patch(':id/price/:price')
  updateCarPrice(
    @Param('id') id: string,
    @Param('price', ParseIntPipe) price: number,
  ): Promise<CarResponseDto> {
    return this.carsService.updateCarPrice(id, price);
  }

  @Patch(':id/color/:color')
  updateCarColor(
    @Param('id') id: string,
    @Param('color') color: string,
  ): Promise<CarResponseDto> {
    return this.carsService.updateCarColor(id, color);
  }

  // PUT /cars/{id}/isCarAvailable/{bool} - ne e pravilno
  // PUT /cars/{id}/is-car-available/{bool} - ne e pravilno
  @Patch(':id/availability/:availability')
  updateCarAvailability(
    @Param('id') id: string,
    @Param('availability', ParseBoolPipe) isAvailable: boolean,
  ): Promise<CarResponseDto> {
    return this.carsService.updateCarAvailability(id, isAvailable);
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string): Promise<void> {
    return this.carsService.deleteCar(id);
  }
}
