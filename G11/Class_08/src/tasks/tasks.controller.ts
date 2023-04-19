import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Response } from 'express';

// localhost:3000/tasks
@Controller('tasks') // "tasks is route path"
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  // localhost:3000/tasks
  @Get()
  getTasks() {
    const tasks = this.taskService.getTasks();

    return tasks;
  }

  // This method will be invoked when GET request is made
  @Get('names') //localhost:3000/tasks/names
  @HttpCode(202) // Nest way => Recommended approach
  getTaskNames() {
    // @Res() response: Response, // Library specific approach
    const tasksNames = this.taskService.getTaskNames();

    // response.status(202).send(tasksNames); // Library specific approach to send response

    /**
     * out of the box NEST regonizes and serialize the object/arrays to JSON
     */
    return tasksNames;
  }

  // Path params
}
