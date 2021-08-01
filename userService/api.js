const bcrypt = require('bcrypt');
const {verifyJwt, generateToken} = require("./auth");
const messages = require('./proto/user_pb');
const {UserRead, UserWrite} = require('./models/user.model');


module.exports = class API {
  constructor(grpc) {
    this.grpc = grpc;
  }

  register = async (call, callback) => {
    const resp = new messages.UserResponse();
    try {

      console.log('Inside  callback');
      const name = call.request.getName();
      const userName =  call.request.getUsername();
      const password = call.request.getPassword();

      const user = await UserRead.findOne({userName});
      
      if (user) {
        resp.setError('User already registered');
        callback(null, resp);
      } else {
          const hash = await bcrypt.hash(password, 10);
          console.log('hash');
          const newUser = new UserWrite({name, userName, password, passwordHash: hash});
          const savedUser = await newUser.save();
          
          console.log('savedUser', savedUser);
          resp.setUserid(savedUser.userId)
          resp.setName(savedUser.name);
          const token = await generateToken(savedUser)
          resp.setUsername(savedUser.userName)
          resp.setToken(token);
          callback(null, resp);
      }
    } catch(err) {
        resp.setError('Unexpected error occured. Check UserService logs');
        callback(null, resp)
    }
  },
  verify = async (call, callback) => {
    const resp = new messages.UserResponse();

    const response = await verifyJwt(call.request.getToken());

    if (response) {
      resp.setUserid(response.userId);
      resp.setUsername(response.username);
      resp.setName(response.name);
      callback(null, resp)
    } else {
      resp.setError('Failed token verification')
      callback(null, resp)
    }
  }

};