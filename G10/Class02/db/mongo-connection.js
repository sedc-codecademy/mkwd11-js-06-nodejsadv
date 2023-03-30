import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_SERVER}.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let db;

export const connectToDatabase = async () => {
    console.log('Connecting to MongoDB...')

    db = await client.db(process.env.MONGO_DB_NAME)

    console.log('Connected to MongoDB!')
}

export const getDb = () => db
