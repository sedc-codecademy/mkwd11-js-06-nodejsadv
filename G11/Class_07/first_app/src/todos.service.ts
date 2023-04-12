import { Injectable } from "@nestjs/common";

export interface Todo {
    name: string,
    isDone: boolean
}

const todos: Todo[] = [
    {name: "Walk the dog", isDone: true},
    {name: "Go to the shop", isDone: false}
]

// The @Injectable() decorator tells the dependency injection mechanism
// that this class is injectable, meaning it can be injected in controllers, other services etc.
@Injectable()
export class TodosService {

    getTodos(){
        return todos
    }
    
}