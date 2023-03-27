import { Router } from "express";
import TaskController from "../controllers/task.controller.js";
import Joi from "joi";
import { createTaskSchema } from "../services/request-validator.js";

const taskController = new TaskController();
const tasksRouter = Router();

// ALL CRUD OPERATIONS

//localhost:3000/tasks && Method = POST
tasksRouter.post("/", async (req, res) => {
  const { name, description, creator } = req.body;

  try {

    await createTaskSchema.validateAsync({
        name: name,
        description: description,
        creator: creator
    })

    await taskController.createTask(name, description, creator);
    res.status(201).send({ message: "New task created." });
  } catch (error) {
    
    if(error instanceof Joi.ValidationError){
        return res.status(400).send({message: error.details[0].message})

    }
    res.status(404).send({ message: "Something went wrong" });
  }
});

//this path param is optional =) it may exist or may not :)
tasksRouter.get("/:id?", async (req, res) => {
  try {
    const id = req.params.id;
    const queryParams = req.query;
    const tasks = await taskController.readTasks(id, queryParams);
    res.send(tasks);
  } catch (error) {
    res.status(404).send({ message: "Something went wrong" });
  }
});

tasksRouter.put("/", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;

  try {
    await taskController.editTask(id, name, description);
    res.status(200).send({ message: `Task with id: ${id} was edited.` });
  } catch (error) {
    res.status(404).send({ message: "Something went wrong" });
  }
});

tasksRouter.patch("/", async (req, res) => {
  const id = req.body.id;

  try {
    await taskController.finishTask(id);
    res.send({ message: `Task with id: ${id} is done` });
  } catch (error) {
    res.status(404).send({ message: "Something went wrong" });
  }
});

tasksRouter.delete("/", async (req, res) => {
  const id = req.body.id;

  try {
    await taskController.deleteTask(id);
    res.send({ message: `Task with id: ${id} was deleted` });
  } catch (error) {
    res.status(404).send({ message: "Something went wrong" });
  }
});

export default tasksRouter;
