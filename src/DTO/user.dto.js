const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    password: Joi.number().integer().min(6).required(),
    email: Joi.string().email().required(),
    avatarPhoto: Joi.string().required()
    
})

module.exports = userSchema;