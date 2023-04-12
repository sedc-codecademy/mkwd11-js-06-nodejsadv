import { Injectable } from '@nestjs/common';
import { Task } from 'src/interfaces/task.interface';

@Injectable()
export class TasksService {
    tasks: Task[] = [
        {id: "1", name: "Task 1", description: "Description 1"},
        {id: "2", name: "Task 2", description: "Description 2"},
        {id: "3", name: "Task 3", description: "Description 3"}
    ]

    getTasks() {
        return this.tasks
    }
}
