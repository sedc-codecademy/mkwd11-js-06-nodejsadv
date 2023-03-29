import mongoConnection from "./db/db-connection.js";
import { ObjectId } from "mongodb";
import express from "express"



const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is live.")
});

// GET ALL 
app.get("/products", async (req, res) => {
    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");

    const products = await productsCollection.find().toArray();

    res.send(products);
});

// GET BY ID
app.get("/products/:id", async (req, res) => {
    const productId = req.params.id;

    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");

    const product = await productsCollection.findOne({_id: new ObjectId(productId) })

    if(!product){
        return res.status(404).send({message: `Product with id: ${productId} was not found`})
    }
    res.send(product);
});

// CREATE ONE
app.post("/products", async (req, res) => {
    const body = req.body;

    const product = {
        name: body.name,
        price: body.price,
        origin: body.origin
    };

    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");

    // insertOne => method of collection that adds one document (object) to the collection
    const productCreated =  await productsCollection.insertOne(product);


    res.status(201).send({message: `Product is created with id: ${productCreated.insertedId}.`})

});

// DELETE ONE
app.delete("/products/:id", async(req, res) => {
    const productId = req.params.id;

    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");

    const result = await productsCollection.deleteOne({ _id: new ObjectId(productId) });

    if(result.deletedCount === 0){
        return res.status(404).send({message: `Product with id: ${productId} was not found.`})
    }
    console.log(result);

    res.send({message: `Product with id: ${productId} was deleted.`})
})


app.listen(3000, () => {
    console.log("Server is up and running.");
    mongoConnection.connectToDatabase();
});