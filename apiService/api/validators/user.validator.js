const {Joi} = require('express-validation');

module.exports = {
  registerUser:{
    body: Joi.object({
      userName: Joi.string().required(),
      name: Joi.string().required(),
      password: Joi.string().required()
    })
  },
  loginUser: {
    body: Joi.object({
        userName: Joi.string().required(),
        password: Joi.string().required(),
      })
  } 
};