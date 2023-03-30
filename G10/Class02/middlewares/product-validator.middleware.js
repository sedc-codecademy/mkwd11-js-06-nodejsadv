import joi from 'joi';

const productSchema = joi.object({
    title: joi.string().required(),
    price: joi.number().required().min(0),
    description: joi.string().required(),
    category: joi.string().required(),
    stock: joi.number().required().min(0),
    purchases: joi.number().required().min(0)
})

const productValidator = (req, res, next) => {
    const productData = req.body;
    const validate = productSchema.validate(productData);

    if (validate?.error) {
        res.status(400).send(validate?.error?.details[0]?.message)
    } else {
        next();
    }
}

export default productValidator;