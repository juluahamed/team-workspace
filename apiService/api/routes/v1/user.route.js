const express = require('express');
const {validate} = require('express-validation');
const controller = require('../../controllers/user.controller');
const {registerUser, loginUser} = require('../../validators/user.validator')

// const {

//   registerDevice,
// } = require('../../validations/profile.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(registerUser), controller.registerUser)

router
  .route('/login')
  .post(validate(loginUser), controller.loginUser)





 

module.exports = router;