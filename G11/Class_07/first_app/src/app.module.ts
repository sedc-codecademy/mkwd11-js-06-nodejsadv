import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

/**
 * @DECORATORS
 * 
 * @Module => IS DECORATOR
 * AppModule is our ROOT MODULE
 */

@Module(
  {
    imports: [TasksModule, UsersModule],
    controllers: [AppController],
    providers: [AppService, TodosService],
  }
)
export class AppModule {}
