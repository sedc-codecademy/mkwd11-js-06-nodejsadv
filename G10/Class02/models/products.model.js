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

    static async makePurchase(purchase) {
        //orderedBy string
        //productId string
        //quantity number

        // check if product exists
        const product = await this.getProductById(purchase.productId)

        // if product doesn't exist, stop code execution and throw error
        if (!product) {
            throw new Error(`Product with id: ${purchase.productId} does not exist.`)
        }
        // sure that product exist

        // check if product is in stock
        if (product.stock < purchase.quantity) {
            throw new Error(`Not enough in stock`)
        }
        // sure that we have enough in stock

        // access purchases collection in MongoDB
        const collection = getDb().collection('purchases');

        // create new purchase
        const createdPurchaseResponse = await collection.insertOne(purchase);

        // prepare product update
        const updatedProduct = {
            stock: product.stock - purchase.quantity,
            purchases: product.purchases + purchase.quantity
        }

        // update the product
        await this.updateProduct(purchase.productId, updatedProduct)

        // return purchase + id
        return { id: createdPurchaseResponse.insertedId, ...purchase }
    }

    static async updatePurchase(purchaseId, body) {
        //orderedBy string
        //productId string
        //quantity number

        const product = await this.getProductById(body.productId);

        if (!product) {
            throw new Error(`Product doesn't exist`)
        }

        if (product.stock < body.quantity) {
            throw new Error(`Not enough in stock`)
        }

        const collection = await getDb().collection('purchases');

        const updatedPurchase = await collection.updateOne({_id: new ObjectId(purchaseId)}, { $set: body})

        const updatedProduct = {
            stock: product.stock - body.quantity,
            purchases: product.purchases + body.quantity
        }

        await this.updateProduct(body.productId, updatedProduct);

        return { id: purchaseId, ...body }
    }
}