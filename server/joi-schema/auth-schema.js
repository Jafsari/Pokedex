const Joi = require('joi')

module.exports = Joi.object().keys({
    username: Joi.string().min(4).max(12).required(),
    password: Joi.string().min(4).max(12).required()
  });
