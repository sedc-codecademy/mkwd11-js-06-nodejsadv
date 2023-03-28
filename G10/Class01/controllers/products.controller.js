import ProductModel from "../models/products.model.js"

export default class ProductController {
    static getAllProducts(req, res) {
        try {
            ProductModel.getAllProducts();
        } catch (error) {
            res.status(500).send({message: "Something wen't wrong"})
        }
    }
}