const Joi = require('joi');

const carSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    year: Joi.number().integer().min(1886).max(new Date().getFullYear()).required(),
    color: Joi.string().valid("red", "blue", "green", "black", "white", "yellow", "silver", "gray").default("white").required(),
    isElectric: Joi.boolean().default(false).required(),
    userId: Joi.string().required()

})

module.exports = carSchema;