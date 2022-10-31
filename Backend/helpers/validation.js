const joi = require("joi");

const addProductSchema = joi.object({
  productName: joi.string().min(5).max(100).required(),
  productBrand: joi.string().required(),
  type: joi.string().required(),
  info: joi.string(),
  price: joi.number().required(),
  discount: joi.number(),
  quantity: joi.number().required(),
  images: joi.array().items(joi.string().required()),
});
const patternPassword = /^[a-zA-Z0-9]{3,30}$/
const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const addUsersSchema = joi.object({
    userName: joi.string().min(5).max(30).required(),
    password: joi.string().min(5).max(100).pattern(new RegExp(patternPassword)).required(),
    firsName: joi.string().min(2).max(10).required(),
    lastName: joi.string().min(2).max(10).required(),
    phone:joi.number(),
    // phone: joi.number().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
    email:joi.string().required(),
    email: joi.string().pattern(new RegExp(patternEmail)),
    addRess: joi.string().min(10).max(100).required(),
    avatar: joi.string(),
  });

module.exports = { addProductSchema, addUsersSchema };