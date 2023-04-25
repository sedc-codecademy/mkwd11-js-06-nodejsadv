import { DataSource } from 'typeorm';
import { Player } from './player.entity';

export const playerProvider = [
  {
    provide: 'PLAYER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Player),
    inject: ['DATA_SOURCE'],
  },
];
