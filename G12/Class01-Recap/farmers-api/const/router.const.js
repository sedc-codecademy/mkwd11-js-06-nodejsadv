import { Router } from "express";
import { farmersRouter } from "../routes/farmer.routes.js";

export const globalRouter = Router();

globalRouter.use("/farmers", farmersRouter);
