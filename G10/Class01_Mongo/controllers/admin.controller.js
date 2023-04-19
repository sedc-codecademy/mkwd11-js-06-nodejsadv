import ProductModel from "../models/products.model.js"

export default class AdminController {
    static async addProduct(req, res) {
        try {
            const product = await ProductModel.addProduct(req.body);
            res.status(200).send(product)
        } catch (error) {
            res.status(500).send({message: 'Error while adding product!'})
        }
    }
}