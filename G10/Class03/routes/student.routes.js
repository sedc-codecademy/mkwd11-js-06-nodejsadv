import { Router } from 'express';
import StudentController from '../controllers/student.controller.js';
const router = Router();

// Get all students
router.get('/', StudentController.getAllStudents)
// Get student by id

// Add a student

// Update a student

// Delete a student

export default router;