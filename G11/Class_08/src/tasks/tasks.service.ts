import { Injectable } from '@nestjs/common';
import { Priority, Status, Task } from 'src/interfaces/task.interface';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: '1',
      name: 'Task 1',
      description: 'Description 1',
      dueData: new Date('2023-04-30').getTime(), // will return timestamp from given date
      priority: Priority.HIGH,
      status: Status.IN_PROGRESS,
    },
    {
      id: '2',
      name: 'Task 2',
      description: 'Description 2',
      dueData: new Date('2023-04-18').getTime(),
      priority: Priority.HIGH,
      status: Status.COMPLETED,
    },
    {
      id: '3',
      name: 'Task 3',
      description: 'Description 3',
      dueData: new Date('2023-05-30').getTime(),
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
}
