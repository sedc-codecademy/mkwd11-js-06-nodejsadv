import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  // To make one service available for injection to other modules that import this module we have to export it like so
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
