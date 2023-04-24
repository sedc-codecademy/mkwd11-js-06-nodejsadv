import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';

// Feature module
@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])], //TASK TABELATA
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
