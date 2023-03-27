import { pathBuilder } from "../utils/utils.js";
import { DataService } from "../services/data.service.js";
import { v4 as uuid } from "uuid";

const farmersPath = pathBuilder(["..", "data", "farmers", "farmers.json"]);

class Farmer {
  constructor(
    firstName,
    lastName,
    email,
    age,
    landSize,
    numberOfTracktors,
    hasAnimals
  ) {
    // Automatically generated with each new instance of a Farmer class
    this.id = uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.landSize = landSize;
    this.numberOfTracktors = numberOfTracktors;
    this.hasAnimals = hasAnimals;
  }
}

export class FarmerModel {
  // Get all farmers
  static async getAllFarmers() {
    return DataService.readJSONFile(farmersPath);
  }
  //   Save all farmers
  static async saveFarmers(farmers) {
    await DataService.saveJSONFile(farmersPath, farmers);
  }
  // Get farmers with query filters
  static async getFarmersWithFilters(filters) {
    let farmers = await this.getAllFarmers();

    // "true" and "false" can be converted to booleans

    if (filters?.hasAnimals) {
      farmers = farmers.filter(farmer =>
        filters.hasAnimals === "true" ? farmer.hasAnimals : !farmer.hasAnimals
      );
    }

    return farmers;
  }
  // Get farmer by id
  static async getFarmerById(farmerId) {
    const farmers = await this.getAllFarmers();

    const foundFarmer = farmers.find(farmer => farmer.id === farmerId);

    if (!foundFarmer) throw new Error("No farmer found");

    return foundFarmer;
  }
  // Create farmer
  static async createFarmer(farmerData) {
    const farmers = await this.getAllFarmers();

    const emailExists = farmers.some(
      farmer => farmer.email === farmerData.email
    );

    if (emailExists) throw new Error("Email already taken");

    const {
      firstName,
      lastName,
      email,
      age,
      landSize,
      numberOfTracktors,
      hasAnimals,
    } = farmerData;

    const newFarmer = new Farmer(
      firstName,
      lastName,
      email,
      age,
      landSize,
      numberOfTracktors,
      hasAnimals
    );

    const updatedFarmers = [...farmers, newFarmer];

    await this.saveFarmers(updatedFarmers);

    return newFarmer;
  }
  // Update farmer
  static async updateFarmer(farmerId, updateData) {
    const farmers = await this.getAllFarmers();

    if (updateData.id) throw new Error("Invalid update");

    const emailExists = farmers.some(
      farmer => farmer.email === updateData?.email
    );

    if (emailExists) throw new Error("Invalid update");

    const foundFarmer = await this.getFarmerById(farmerId);

    const updatedFarmer = { ...foundFarmer, ...updateData };

    const newFarmers = farmers.map(farmer =>
      farmer.id === updatedFarmer.id ? updatedFarmer : farmer
    );

    await this.saveFarmers(newFarmers);
  }
  // 5. Delete farmer by id
  static async deleteFarmer(farmerId) {
    const farmers = await this.getAllFarmers();

    const newFarmers = farmers.filter(farmer => farmer.id !== farmerId);

    if (newFarmers.length === farmers.length)
      throw new Error("Farmer not found");

    await this.saveFarmers(newFarmers);
  }
}
