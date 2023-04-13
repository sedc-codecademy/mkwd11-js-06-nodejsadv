import express from 'express';
import AdminController from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/', AdminController.addProduct)

export default router;