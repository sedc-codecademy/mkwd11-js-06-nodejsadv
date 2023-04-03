import * as dotenv from "dotenv";

dotenv.config();

export const mongo_connection = async () => {
    try {
        
        // Connect to MONGO DB HERE

        console.log("Connected to Mongo database.")

    } catch (error) {
        throw new Error("Connection to Mongo database failed.")
    }
};
