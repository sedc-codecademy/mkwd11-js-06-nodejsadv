import { Router } from "express";
import { FarmerController } from "../controllers/farmer.controller.js";
import { farmerValidator } from "../middlewares/farmer-validator.middleware.js";

export const farmersRouter = Router();

// Get all farmers
farmersRouter.get("/", FarmerController.getAllFarmers);
// Get farmer by id
farmersRouter.get("/:id", FarmerController.getFarmerById);
// Create farmer
farmersRouter.post("/", farmerValidator, FarmerController.createFarmer);
// Update farmer with patch
farmersRouter.patch("/:id", FarmerController.updateFarmer);
// Delete farmer
farmersRouter.delete("/:id", FarmerController.deleteFarmer);
