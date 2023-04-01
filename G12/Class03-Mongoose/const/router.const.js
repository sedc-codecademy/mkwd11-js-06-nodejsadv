import { Router } from "express";
import { courseRouter } from "../routes/course.routes.js";
import { studentRouter } from "../routes/student.routes.js";

export const globalRouter = Router();

globalRouter.use("/students", studentRouter);
globalRouter.use("/courses", courseRouter);
