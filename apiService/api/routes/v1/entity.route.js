const express = require('express');
const {validate} = require('express-validation');
const controller = require('../../controllers/entity.controller');
const {verify} = require('../../controllers/user.controller');
const {createEntity, listEntity} = require('../../validators/entity.validator')

// const {
//   registerDevice,
// } = require('../../validations/profile.validation');

const router = express.Router();

router
  .route('/create')
  .post(verify, validate(createEntity), controller.createEntity);
  // .post(validate(), controller.getUser)

router
  .route('/list')
  .post(verify, validate(listEntity), controller.listEntity);



 

module.exports = router;