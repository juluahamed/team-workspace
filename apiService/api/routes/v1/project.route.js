const express = require('express');
const {validate} = require('express-validation');
const controller = require('../../controllers/project.controller');
const {verify} = require('../../controllers/user.controller');
const {createProject} = require('../../validators/project.validator')

// const {

//   registerDevice,
// } = require('../../validations/profile.validation');

const router = express.Router();

router
  .route('/create')
  .post(verify, validate(createProject), controller.createProject);
  // .post(validate(), controller.getUser)




 

module.exports = router;