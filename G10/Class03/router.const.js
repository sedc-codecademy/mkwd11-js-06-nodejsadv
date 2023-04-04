import { Router } from "express";
import studentRoutes from './routes/student.routes.js'

const router = Router();

// courses routes

// student routes
router.use('/students', studentRoutes)

export default router;