const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/user.controller');

// const {

//   registerDevice,
// } = require('../../validations/profile.validation');

const router = express.Router();

router
  .route('/')
  .post(controller.registerUser);



 

module.exports = router;