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
        const collection = await getDb().collection('products');
        const createdProductInfo = await collection.insertOne(product);
        return { id: createdProductInfo.insertedId, ...product };
    }

    static async updateProduct(productId, body) {
        const collection = await getDb().collection('products');
        const result = await collection.updateOne({ _id: new ObjectId(productId) }, { $set: body })
        return result;
    }

    static async deleteProduct(productId) {
        const collection = await getDb().collection('products');
        const deleteResponse = await collection.deleteOne({ _id: new ObjectId(productId) });
        console.log(deleteResponse)
    }
}