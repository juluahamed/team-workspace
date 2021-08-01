const {Joi} = require('express-validation');

module.exports = {
  createProject:{
    body: Joi.object({
      name: Joi.string().required(),
      owner: Joi.string().required(),
      sharedUsers: Joi.array()
    })
  }
};