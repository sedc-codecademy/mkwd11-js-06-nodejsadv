import "dotenv/config";

// We need to use mongo client to connect to databse
import { MongoClient, ObjectId } from "mongodb";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

console.log(MONGO_URI);

const client = new MongoClient(MONGO_URI);

const run = async () => {
  try {
    // First we ping the databse to see if the connection URI is good and the databse is up
    await client.db().command({ ping: 1 });

    console.log("connected to mongodb");

    // This is the databse "adv-node"
    const database = client.db();

    // This is the products collection
    const products = database.collection("products");

    // find returns a cursor that allows for more operations other than just retrieving data
    const productsCursor = products.find({});

    const data = await productsCursor.toArray();

    console.log("All products", data);

    const product = await products.findOne({
      _id: new ObjectId("64246702e94093df07f46a8"),
    });

    console.log("Product result", product);
  } catch (error) {
    console.log(error);
  }
};

run();
