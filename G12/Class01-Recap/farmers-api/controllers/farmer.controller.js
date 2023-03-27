import { FarmerModel } from "../models/farmer.model.js";

export class FarmerController {
  // Get all farmers
  static async getAllFarmers(req, res) {
    try {
      const filters = req.query;

      const farmers = await FarmerModel.getFarmersWithFilters(filters);

      return res.json(farmers);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error.message);
    }
  }
  //   Get farmer by id
  static async getFarmerById(req, res) {
    try {
      const { id: farmerId } = req.params;

      const foundFarmer = await FarmerModel.getFarmerById(farmerId);

      return res.json(foundFarmer);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error.message);
    }
  }
  //   Create farmer
  static async createFarmer(req, res) {
    try {
      const newFarmer = await FarmerModel.createFarmer(req.body);

      res.status(201).json(newFarmer);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  }
  //   Update farmer
  static async updateFarmer(req, res) {
    try {
      await FarmerModel.updateFarmer(req.params.id, req.body);
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  }
  //    Delete farmer by id
  static async deleteFarmer(req, res) {
    try {
      const { id: farmerId } = req.params;

      await FarmerModel.deleteFarmer(farmerId);

      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ msg: error.message });
    }
  }
}
