import { Router } from 'express'
import CourseController from '../controllers/course.controller.js';

const router = Router();

// Get all courses
router.get('/', CourseController.getAllCourses)

// Get course by ID

// Create course
router.post('/', CourseController.addNewCourse)

// Update course

// Delete course

export default router;