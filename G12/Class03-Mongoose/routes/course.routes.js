import { Router } from "express";
import { CourseController } from "../controllers/course.controller.js";

export const courseRouter = Router();

// 1. Get all courses
courseRouter.get("/", CourseController.getAllCourses);
// 2. Get course by id
courseRouter.get("/:id", CourseController.getCourseById);
// 3. Create course
courseRouter.post("/", CourseController.createCourse);
