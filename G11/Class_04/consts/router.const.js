import { Router } from "express";


const router = Router();

router.get('/', (req, res) => {
    res.send("Server is live.")
});

// Here add the rest of the routes or routers

export default router;