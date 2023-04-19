import express from 'express';
import ProductController from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getProductById)

export default router;