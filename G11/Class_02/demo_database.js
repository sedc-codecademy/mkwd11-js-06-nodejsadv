import { MongoClient } from "mongodb";

// 1. NEW INSTANCE OF MONGO CLIENT, WITH THE VALUE OF OUR MONGO DB ATLAS URL
const client = new MongoClient(
  "mongodb+srv://mongo:mongo@cluster0.7tgoixo.mongodb.net/?retryWrites=true&w=majority"
);

// SIMPLE DB CONNECTION;

async function connect() {
  try {
    await client.connect(); // 2. CONNECTION WITH DB
    console.log("Connected to mongo atlas db...");

    const db = client.db("store"); // 3. GET THE store DATABASE

    // the collection has many methods that manipulate with the collection itself
    // e.g write to collection, get records, delete records etc.
    const productsCollection = db.collection("products"); // 4. GET products COLLECTION
    
    // 5. find method returns cursor that points to the documents returned
    // and we use the method toArray to transform the cursor to array of objects =)
    
    // find => method to get the documents of the collection !important: it returns cursor
    // toArray() => method that transforms the cursor to array of objects =)
    const products = await productsCollection.find().toArray();
    console.log(products);



    // findOne => method of the collection that gets one record depending on query/condition
    // if value is not found returns NULL 
    const productFound = await productsCollection.findOne({name: "Banana"});
    console.log("PRODUCT FOUND: ", productFound)

    // if productFound === undefined // productFound === null
    // if(!productFound){}
  } catch (error) {
    console.log(error);
  }
}

connect();
