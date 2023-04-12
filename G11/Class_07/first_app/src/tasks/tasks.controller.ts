import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

// localhost:3000/tasks
@Controller('tasks')
export class TasksController {
    constructor(
        private readonly taskService: TasksService
    ){}
    
    @Get()
    getTasks(){
        const tasks = this.taskService.getTasks();

        return tasks
    }
}
