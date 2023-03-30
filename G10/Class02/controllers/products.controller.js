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
}