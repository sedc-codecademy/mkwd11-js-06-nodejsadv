import { Router } from "express";

import productRouter from "../routes/products.routes.js";
import orderRouter from "../routes/orders.routes.js";

const router = Router();

router.get('/', (req, res) => {
    res.send("Server is live.")
});

router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;