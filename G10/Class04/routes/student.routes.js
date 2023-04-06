import { Router } from 'express';
import StudentController from '../controllers/student.controller.js';
const router = Router();

// Get all students
router.get('/:id?', StudentController.getAllStudents)
// Get student by id

// Add a student
router.post('/', StudentController.addNewStudent)

// Update a student
router.put('/:id', StudentController.updateStudent)

// Delete a student
router.delete('/:id', StudentController.deleteStudent)

export default router;