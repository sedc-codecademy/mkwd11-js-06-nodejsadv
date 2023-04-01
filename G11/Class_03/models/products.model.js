import mongoose from "mongoose";

import productSchema from "../mongo_schemas/product.schema.js";

class ProductModel {
    // This is the product model for MONGO
    // We will use this property to interact with our MONGO database
    mongo_model; // at this moment mongo_model is undefined

 
    constructor(){
        //at this momement we assign new value to the mongo_model property
                            //  name of model, schema for the model, name of collection
        this.mongo_model = mongoose.model("Product", productSchema, 'Products') 

        
    }


    async getAllProducts(){
        const products = await this.mongo_model.find() //will return all the records from the collection Products

        return products
    };

    async getProductById(productId){
        const product = await this.mongo_model.findById(productId);

        return product;
    }
   
    async addProduct(productData) {
        /**
         * productData => object literal
         *  {
         *      name: "Value Name",
         *      description: "Value Description",
         *      price: Value Price
         *  }
         */
        const product = new this.mongo_model(productData);

        const response = await product.save();

        // console.log(response) // uncomment to see the response when product is created =)
    };


    async updateProduct(productId, productData){
        const product = await this.mongo_model.findById(productId);

        if(!product) {
            throw new Error(`Product with id: ${productId} was not found`);
        }
        
        await this.mongo_model.updateOne({_id: productId }, { 
            name: productData.name || product.name,
            description: productData.description || product.description,
            price: productData.price || product.price
        })

    }

    async deleteProduct(productId){
        await this.mongo_model.findByIdAndDelete(productId)
    }

};

export default ProductModel;