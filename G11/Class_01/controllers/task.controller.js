import TasksModel from "../models/task.model.js";


const taskModel = new TasksModel();

class TaskController {
    async createTask(name, description, creator){
        await taskModel.createTask(name, description, creator)
    }
};

export default TaskController;