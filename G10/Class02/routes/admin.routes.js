import express from 'express';
import AdminController from '../controllers/admin.controller.js';
import productValidator from '../middlewares/product-validator.middleware.js'

const router = express.Router();

router.post('/', productValidator, AdminController.addProduct)
router.put('/:id', productValidator, AdminController.updateProduct)
router.delete('/:id', AdminController.deleteProduct)

export default router;