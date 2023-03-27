import { Router } from "express";
import tasksRouter from "../routes/tasks.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Server is live.")
});

//localhost:3000/tasks
router.use("/tasks", tasksRouter);

export default router;