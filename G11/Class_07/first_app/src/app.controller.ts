import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TodosService } from './todos.service';

@Controller()
export class AppController {

  // todosService = new TodosService()

  constructor(
     private readonly appService: AppService,
     private readonly todosService: TodosService
    ) {}

  @Get() //this is the GET Request =)
  getHello(): string {
    return this.appService.getHello();
  }

  //localhost:3000/todos
  @Get("/todos") // GET REQUEST ON ENDPOINT /TODOS
  getTodos() {
    const todos = this.todosService.getTodos()

    return todos;
  }
}
