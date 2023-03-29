import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' //PACKAGE SO WE CAN USE ENV VARIABLES
dotenv.config(); 

const MONGO_URL = process.env.MONGO_URL; //USAGE OF ENV VARIABLES

// WITHOUT THE USAGE OF ENV VARIABLE
// const MONGO_URL = "mongodb+srv://mongo:mongo@cluster0.7tgoixo.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(MONGO_URL);


let dbConnection;

export default {
    async connectToDatabase(){
        try {
            const connection = await client.connect(); //connect to DB

            dbConnection = connection.db("store");
            console.log("Connected to MONGO DB");
        } catch (error) {
            console.log("Couldnt connect to MONGO DB");
            throw new Error(error);
        }
    },


    getDb(){
        if(!dbConnection){
            throw new Error("Database connection not initialized")
        }

        return dbConnection
    }
}