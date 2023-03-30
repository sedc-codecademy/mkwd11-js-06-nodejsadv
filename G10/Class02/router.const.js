import express from 'express';
import productsRouter from './routes/products.routes.js'
import adminRouter from './routes/admin.routes.js';

const router = express.Router();

router.use('/products', productsRouter)
router.use('/admin', adminRouter)

export default router;