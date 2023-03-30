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

    static async updateProduct(req, res) {
        try {
            const updatedProduct = await ProductModel.updateProduct(req.params.id, req.body)
            res.status(200).send(updatedProduct);
        } catch (error) {
            res.status(500).send({ message: 'Error while updating product!' })
        }
    }

    static async deleteProduct(req, res) {
        try {
            await ProductModel.deleteProduct(req.params.id)
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send({ message: 'Error while deleting product!' })
        }
    }
}