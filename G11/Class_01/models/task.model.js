import { IdFactory } from "../services/id_generator.js";
import { FileService } from "../services/fs.service.js";
import path from "path";

class Task {
  constructor(id, name, description, creator) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.creator = creator;
    this.createdAt = new Date().toISOString();
    this.updatedAt = null;
    this.isDone = false;
  }
}

class TasksModel {
  constructor() {
    this.idFactory = new IdFactory();
    this.pathToDb = path.join("./db", "tasks.json");
  }

  async createTask(name, description, creator) {
    const tasks = await FileService.readFile(this.pathToDb);

    const task = new Task(
      this.idFactory.generate(),
      name,
      description,
      creator
    );

    const tasksToSave = [...tasks, task];

    await FileService.writeFile(
      this.pathToDb,
      JSON.stringify(tasksToSave, null, 2)
    );
  }

  //Implement GET ALL TASKS
  async readTasks(id = "", query) {
    const tasks = await FileService.readFile(this.pathToDb);

    if (id) {
      const foundTask = tasks.find((task) => task.id === id);
      return foundTask;
    }
    if(query.isDone === "true"){
        const doneTasks = tasks.filter((task) => task.isDone) //task.isDone === true
        return doneTasks;
    }

    return tasks;
  }

  async editTask(id, name, description) {
    const tasks = await FileService.readFile(this.pathToDb);

    const tasksToSave = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: name || task.name,
          description: description || task.description,
          updatedAt: new Date().toISOString(),
        };
      }
      return task;
    });

    await FileService.writeFile(
      this.pathToDb,
      JSON.stringify(tasksToSave, null, 2)
    );
  }

  async finishTask(id) {
    const tasks = await FileService.readFile(this.pathToDb);

    const tasksToSave = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: true,
          updatedAt: new Date().toISOString(),
        };
      }
      return task;
    });

    await FileService.writeFile(
      this.pathToDb,
      JSON.stringify(tasksToSave, null, 2)
    );
  }

  async deleteTask(id){
    const tasks = await FileService.readFile(this.pathToDb);

    const taskToSave = tasks.filter((task) => task.id !== id);

    await FileService.writeFile(this.pathToDb, JSON.stringify(taskToSave, null , 2))
  }
}

export default TasksModel;
