const Joi = require('joi');

// Validation schemas
const menuItemSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  category: Joi.string().valid('starter', 'main course', 'dessert').required(),
});

const orderSchema = Joi.object({
  items: Joi.array().items(Joi.string().required()).min(1).required(),
});

// Middleware functions
exports.validateMenuItem = (req, res, next) => {
  const { error } = menuItemSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

exports.validateOrder = (req, res, next) => {
  const { error } = orderSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
