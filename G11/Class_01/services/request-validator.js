import Joi from "joi";

export const createTaskSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(40).required(),
    creator: Joi.string().min(2).required()
})