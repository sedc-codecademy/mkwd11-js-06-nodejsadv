import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class ProductModel {
    static async getAllProducts() {
        const collection = await getDb().collection('products');
        // console.log('collection', collection)
        const products = await collection.find().toArray()
        return products;
    }

    static async getProductById(id) {
        const collection = await getDb().collection('products');
        const product = await collection.findOne({ _id: new ObjectId(id) })
        console.log('product', product)
        return product;
    }

    static async addProduct(product) {
        console.log('inside model', product)
        const collection = await getDb().collection('products');
        const createdProduct = await collection.insertOne(product);
        console.log('created product', createdProduct);
        return createdProduct;
    }
}