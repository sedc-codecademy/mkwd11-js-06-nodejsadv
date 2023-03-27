import { Router } from "express";
import TaskController from "../controllers/task.controller.js";

const taskController = new TaskController()
const tasksRouter = Router();

// ALL CRUD OPERATIONS

//localhost:3000/tasks && Method = POST
tasksRouter.post('/', async(req, res) => {
    const { name, description, creator } = req.body;

    try {
        await taskController.createTask(name, description, creator);
        res.status(201).send({message: "New task created."});
    } catch (error) {
        res.status(404).send({message: "Something went wrong"});
    }
})

export default tasksRouter;