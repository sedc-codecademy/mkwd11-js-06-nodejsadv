import { DataSource } from 'typeorm';
import { Car } from './car.entity';

export const carProviders = [
  {
    provide: 'CAR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Car),
    inject: ['DATA_SOURCE'],
  },
];
