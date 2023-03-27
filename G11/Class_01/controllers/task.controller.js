import TasksModel from "../models/task.model.js";


const taskModel = new TasksModel();

class TaskController {
    async createTask(name, description, creator){
        await taskModel.createTask(name, description, creator)
    }
    async readTasks(id = "", query){
        const tasks = await taskModel.readTasks(id, query);

        return tasks;
    }

    async editTask(id, name, description){
        await taskModel.editTask(id, name, description)
    };

    async finishTask(id){
        await taskModel.finishTask(id)
    }

    async deleteTask(id){
        await taskModel.deleteTask(id)
    }
};

export default TaskController;