import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Priority, Status, Task } from 'src/interfaces/task.interface';
import { TaskDto } from './dto/task.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: '1',
      name: 'Task 1',
      description: 'Description 1',
      dueDate: new Date('2023-04-30').getTime(), // will return timestamp from given date
      priority: Priority.HIGH,
      status: Status.IN_PROGRESS,
    },
    {
      id: '2',
      name: 'Task 2',
      description: 'Description 2',
      dueDate: new Date('2023-04-18').getTime(),
      priority: Priority.HIGH,
      status: Status.COMPLETED,
    },
    {
      id: '3',
      name: 'Task 3',
      description: 'Description 3',
      dueDate: new Date('2023-05-30').getTime(),
      priority: Priority.LOW,
      status: Status.PENDING,
    },
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskNames() {
    const taskNames = this.tasks.map((task) => task.name);

    return taskNames;
  }

  findOne(id: string) {
    // DATABASE OPERATIONS
    const task = this.tasks.find((task) => task.id === id);

    return task;
  }

  getTasksByQuery(queryValue: string) {
    if (queryValue === 'true') {
      const completedTasks = this.tasks.filter(
        (task) => task.status === Status.COMPLETED,
      );

      return completedTasks;
    } else if (queryValue === 'false') {
      const notCompleted = this.tasks.filter(
        (task) => task.status !== Status.COMPLETED,
      );

      return notCompleted;
    }

    throw new HttpException(
      'Wrong input, query is not supported',
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }

  createTask(taskDto: TaskDto) {
    const task: Task = {
      ...taskDto,
      id: uuid(),
      dueDate: new Date(taskDto.dueDate).getTime(),
    };

    // Here we can work with DB and save in the DB
    this.tasks.push(task);

    return task.id;
  }
}
