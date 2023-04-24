import { Priority, Status, Task } from 'src/interfaces/task.interface';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tasks')
export class TaskEntity implements Task {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'bigint',
  })
  dueDate: number; //timestamp

  @Column()
  priority: Priority;

  @Column()
  status: Status;
}
