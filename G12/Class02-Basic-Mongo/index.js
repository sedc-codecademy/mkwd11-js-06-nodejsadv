import "dotenv/config";
import express from "express";
import { ObjectId } from "mongodb";
import { getDb, connectToDatabase } from "./db/mongo-connection.js";

const app = express();

app.use(express.json());

// 1. Get all products
app.get("/products", async (req, res) => {
  try {
    const db = getDb();

    const productsCollection = db.collection("products");

    const productsCursor = productsCollection.find({});

    const productsData = await productsCursor.toArray();

    res.status(200).send(productsData);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const db = getDb();
    const productsCollection = db.collection("products");

    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) throw new Error("Product not found");

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: error.message });
  }
});

// Creating a product
app.post("/products", async (req, res) => {
  try {
    const productData = req.body;

    const db = getDb();
    const productsCollection = db.collection("products");

    const response = await productsCollection.insertOne(productData);

    console.log("insertOne response", response);

    res.status(201).send({
      msg: `Product with ${response.insertedId} was added.`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});

// Updating a product using PUT
app.put("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productUpdates = req.body;

    const db = getDb();
    const productsCollection = db.collection("products");

    const response = await productsCollection.findOneAndReplace(
      { _id: new ObjectId(productId) },
      productUpdates,
      {
        // Return document after returns the document after it has been updated while if we don't include this the document that will be returned will be the original that was found by the filter
        returnDocument: "after",
      }
    );

    console.log("Replace response", response);

    console.log(response.value);

    res.json(response.value);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});

// Update a product using PATCH
app.patch("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productUpdates = req.body;

    const db = getDb();
    const productsCollection = db.collection("products");

    const response = await productsCollection.findOneAndUpdate(
      {
        // Exact same functionality as findOne, it searches the collection and then finds a document or returns null if a document can't be found
        _id: new ObjectId(productId),
      },
      {
        // $set key when given an object of properties of the document will update only the ones contained in the object, useful for patch and for partial updates
        $set: productUpdates,
      },
      {
        // Same functionality as the returnDocument above, check comment
        returnDocument: "after",
      }
    );

    console.log("Update response", response);

    console.log(response.value);

    res.json(response.value);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});

// Delete product HOMEWORK
/* 
    method you need to use: deleteOne()
    be sure to check the response because delete one only returns meta info instead of the value deleted
*/

app.listen(3000, () => {
  connectToDatabase();
  console.log("Server is up at port 3000");
});
