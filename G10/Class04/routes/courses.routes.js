import { Router } from 'express'
import CourseController from '../controllers/course.controller.js';

const router = Router();

// Get all courses
router.get('/', CourseController.getAllCourses)

// Get course by ID

// Create course
router.post('/', CourseController.addNewCourse)

// Update course
router.put('/:id', CourseController.updateCourse)

// Delete course
router.delete('/:id', CourseController.deleteCourse)

// Enroll students
router.patch('/:id/students', CourseController.updateStudents)

export default router;