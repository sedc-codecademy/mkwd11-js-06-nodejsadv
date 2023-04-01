import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); //will read from .env

const MONGO_URL = process.env.MONGO_URL_DEV; // MONGO_URL_PROD

export const mongo_connection = async () => {
    try {
        
        await mongoose.connect(MONGO_URL, {
           dbName: "food_app" 
        })

        console.log("Connected to Mongo database.")

    } catch (error) {
        throw new Error("Connection to Mongo database failed.")
    }
};
