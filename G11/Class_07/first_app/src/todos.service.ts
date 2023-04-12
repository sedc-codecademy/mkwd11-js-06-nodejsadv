import { Injectable } from "@nestjs/common";

export interface Todo {
    name: string,
    isDone: boolean
}

const todos: Todo[] = [
    {name: "Walk the dog", isDone: true},
    {name: "Go to the shop", isDone: false}
]

@Injectable()
export class TodosService {

    getTodos(){
        return todos
    }
    
}