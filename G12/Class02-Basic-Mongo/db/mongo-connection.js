import { MongoClient } from "mongodb";

// Things in .env file that need to work
// https://letmegooglethat.com/?q=mongo+db+node+crud+operations
// MONGO_USERNAME=db username
// MONGO_PASSWORD=db password
// MONGO_CLUSTER=cluster address
// MONGO_DATABASE=database

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI);

let database;

export const connectToDatabase = async () => {
  try {
    // First we ping the databse to see if the connection URI is good and the databse is up
    await client.db().command({ ping: 1 });

    console.log("connected to mongodb");

    // This is the databse "adv-node"
    database = client.db();
  } catch (error) {
    console.log(error);
  }
};

export const getDb = () => {
  return database;
};
