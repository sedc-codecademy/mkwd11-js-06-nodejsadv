import ProductModel from "../models/products.model.js"

export default class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await ProductModel.getAllProducts();
            res.status(200).send(products)
        } catch (error) {
            res.status(500).send({message: "Something wen't wrong"})
        }
    }

    static async getProductById(req, res) {
        try {
            const product = await ProductModel.getProductById(req.params.id)
            res.status(200).send(product)
        } catch (error) {
            res.status(500).send({message: "Something wen't wrong"})
        }
    }

    static async makePurchase(req, res) {
        try {
            const createdPurchase = await ProductModel.makePurchase(req.body)
            res.status(201).send(createdPurchase);
        } catch (error) {
            res.status(500).send({ message: 'Error while making purchase' })
        }
    }

    static async updatePurchase(req, res) {
        try {
            const updatedPurchase = await ProductModel.updatePurchase(req.params.id, req.body)
            res.status(200).send(updatedPurchase)
        } catch (error) {
            res.status(500).send({ message: "Error while updating purchase" })
        }
    }
}