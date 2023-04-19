import { Router } from "express";
import studentRoutes from './routes/student.routes.js'
import courseRoutes from './routes/courses.routes.js'

const router = Router();

// courses routes
router.use('/courses', courseRoutes)

// student routes
router.use('/students', studentRoutes)

export default router;