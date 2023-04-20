import { Priority, Status } from 'src/interfaces/task.interface';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  name: string;

  description: string;
  dueDate: string;
  priority: Priority;

  @IsNotEmpty() // This decorator will check if status property is send during the REQUEST
  status: Status;
}
