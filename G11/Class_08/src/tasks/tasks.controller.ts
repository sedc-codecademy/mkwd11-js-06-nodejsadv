import {
  Controller,
  Get,
  HttpCode,
  Param,
  Req,
  Res,
  HttpException,
  HttpStatus,
  Query,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Response, Request, response } from 'express';
import { TaskDto } from './dto/task.dto';

interface IdRouteParams {
  id: string;
}

// This controller is requested on: localhost:3000/tasks
@Controller('tasks') // "tasks is route path"
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  // localhost:3000/tasks
  //Decorator @Get() Specifies that this method is accessed through GET HTTP METHOD
  //The empty Get decorator is the DEFAULT ENDPOINT on this controller
  //when we request localhost:3000/tasks this method, with this default decorator
  //is beign hit.
  @Get()
  getTasks() {
    const tasks = this.taskService.getTasks();

    return tasks;
  }

  // This method will be invoked when GET request is made
  // on the endpoint /names
  // This method will be accessed when localhost:3000/tasks/names is requested with GET HTTP METHOD
  @Get('names') //localhost:3000/tasks/names
  @HttpCode(202) // Nest way => Recommended approach to RETURN DIFFERENT HTTP STATUS, OUT OF THE BOX NEST RETURNS 200 FOR GET ROUTES
  // prettier-ignore
  getTaskNames(
    @Res() response: Response, // Library specific approach to acess express's reponse interface
  ) {
    const tasksNames = this.taskService.getTaskNames();

    // response.status(202).send(tasksNames); // Library specific approach to send response

    /**
     * out of the box NEST regonizes and serialize the object/arrays to JSON
     */
    return tasksNames;
  }

  //localhost:3000/tasks/query?completed=false or true
  //completed=true => will return completed tasks
  //completed=false => will return all tasks that are not COMPLETED STATUS
  @Get('query') // Accessed on localhost:3000/tasks/query
  getCompleted(@Query('completed') completed: string) {
    console.log('Completed query param value', completed);

    const tasks = this.taskService.getTasksByQuery(completed);

    return tasks;
  }

  // Path params
  // localhost:3000/tasks/some_id
  @Get(':id')
  findOne(
    //@Res() response: Response,
    @Req() request: Request, // Library express specific
    @Param() params: IdRouteParams,
  ) {
    // Library Specific Aprroach using EXPRESS
    // console.log('Old school way', request.params);
    // return `Id that was send is ${params.id}`;

    // Nest way
    console.log(params);
    const id: string = params.id;

    const task = this.taskService.findOne(id);
    console.log(task);
    if (task === undefined) {
      throw new HttpException(
        `Task with id ${id} was not found.`,
        HttpStatus.NOT_FOUND,
      );

      // Same as above but using hardcoded status code
      //   throw new HttpException(
      //     `Task with id ${id} was not found.`,
      //     404
      //   );
    }

    return task;
  }

  //localhost:3000/tasks
  // ON POST HTTP METHOD
  // out of the box response status is 201
  @Post()
  create(@Body() body: TaskDto) {
    console.log(body);

    const id = this.taskService.createTask(body);

    return {
      message: `Task was created`,
      id: id,
    };
  }

  //Delete Method
  @Delete()
  deleteOne() {}

  @Put()
  updateOne() {}
}
