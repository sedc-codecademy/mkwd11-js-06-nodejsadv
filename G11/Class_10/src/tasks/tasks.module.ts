import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { CommentsService } from 'src/comments/comments.service';
import { CommentsController } from 'src/comments/comments.controller';
import { CommentEntity } from 'src/comments/entities/comment.entity';

// Feature module
@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, CommentEntity])],
  providers: [TasksService, CommentsService],
  controllers: [TasksController, CommentsController],
})
export class TasksModule {}
