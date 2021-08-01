const {Joi} = require('express-validation');

module.exports = {
  createEntity:{
    body: Joi.object({
      name: Joi.string().required(),
      owner: Joi.string().required(),
      parent: Joi.string().required(),
      content: Joi.string().required(),
      sharedUsers: Joi.array(),
      entityType: Joi.string().valid('FILE', 'FOLDER'),
      projectId: Joi.string(),
    })
  },
  listEntity: {
    body: Joi.object({
        parentEntityId: Joi.string().required(),
        requesterId: Joi.string().required(),
        projectId: Joi.string().required()
      })
  } 
};