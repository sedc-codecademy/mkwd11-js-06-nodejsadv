import Joi from "joi";

const createFarmerSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).max(150).required(),
  landSize: Joi.number().required(),
  numberOfTracktors: Joi.number().required(),
  hasAnimals: Joi.boolean().required(),
});

export const farmerValidator = (req, res, next) => {
  const farmerData = req.body;

  const { error } = createFarmerSchema.validate(farmerData);

  if (error) return res.status(400).json({ msg: error.details[0].message });

  next();
};
