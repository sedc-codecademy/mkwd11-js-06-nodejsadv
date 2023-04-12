import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TodosService } from './todos.service';

@Controller()
export class AppController {
  
  // todosService = new TodosService()

  // the controller utilizes the app service 
  // helps to separate business login from the controller itself

  
  //With dependency injection, components don't need to know how to create their own dependencies, and instead, rely on a dependency injection container to provide them with the necessary objects. 
  //The container is responsible for creating the objects and injecting them into the components that require them.

  //AppController requires instance of TodosService to perform it's task.
  //instead of directly to create an instance of the TodosService, the class constructor specifies that it requires
  //an instance of the TodosService, that instance should provided by the dependency injector container
  //This is achived when we made the TodosService with the injectable component using @Injectable
  //show them the error when we make the injection
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
