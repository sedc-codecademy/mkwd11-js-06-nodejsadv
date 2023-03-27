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

    await FileService.writeFile(this.pathToDb, JSON.stringify(tasksToSave, null, 2))
  }
}


export default TasksModel;