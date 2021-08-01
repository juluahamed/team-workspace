const bcrypt = require('bcrypt');
// const auth = require("./auth");
const messages = require('./proto/user_pb');
const {UserRead, UserWrite} = require('./models/user.model')


module.exports = class API {
    constructor(grpc) {
        this.grpc = grpc;
    }

    register = async (call, callback) => {
        console.log('Inside  callback');
        const resp = new messages.UserResponse();
        // resp.setUserid("1234")
        // resp.setName("Julu Ahamed");
        // resp.setUsername("juluahamed@gmail.com")
        // resp.setToken("ajsdlakjsdsajd");
        // const respo = await UserRead.findOne();
        // console.log('Response', respo);
        // const newUser = new UserWrite({
        //     userId: "1234",
        //     userName: "Julu Ahamed",
        //     passwordHash: "testhash"
        // });

        // console.log('newuser', newUser);
        
        // const responsa = newUser.save();
        // console.log('responsa', responsa)
        // const respo2 = await UserRead.findOne();
        // console.log('Response post write', respo2);
        // callback(null, resp);
        const name = call.request.getName();
        const userName =  call.request.getUsername();
        const password = call.request.getPassword();

        const user = await UserRead.findOne({userName});
        if (user) {
            callback(null, resp);
        } else {
            // bcrypt.hash(password, 10, (err, hash) => {
            // const newUser = {name, userName, password}
            const hash = await bcrypt.hash(password, 10);
            console.log('hash');
            const newUser = new UserWrite({name, userName, password, passwordHash: hash});
            const savedUser = await newUser.save();
            
            console.log('savedUser', savedUser);
            const resp = new messages.UserResponse();
            resp.setUserid(savedUser.userId)
            resp.setName(savedUser.userName);
            resp.setUsername(savedUser.userName)
            resp.setToken("ajsdlakjsdsajd");
            callback(null, resp);
        }



        // const users = this.db.collection("users");

        // bcrypt.hash(call.request.getPassword(), 10, (err, hash) => {
        //     let user = { name: call.request.getName(), email: call.request.getEmail(), password: hash }
        //     users.insertOne(user).then(r => {
        //         let resp = new messages.UserResponse();
        //         resp.setId(user._id.toString());
        //         resp.setName(user.name);
        //         resp.setEmail(user.email);
        //         resp.setToken(auth.generateToken(user));
        //         callback(null, resp);
        //     });
        // });
    }

};