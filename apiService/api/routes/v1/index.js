const express = require('express');
const userRoutes = require('./user.route');
const validate = require('express-validation');

// const auth0Jwt = require('../../middlewares/auth0jwt');
// const{verifyJwt}=require('../../middlewares/jwt')

const router = express.Router();

router.use('/user', userRoutes);




module.exports = router;