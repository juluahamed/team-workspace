const {Joi} = require('express-validation');

module.exports = {
  registerUser:{
    body: Joi.object({
      userName: Joi.string(),
      name: Joi.string(),
      password: Joi.string()
    })
  }, 
};