require('dotenv').config();

const grpc = require('@grpc/grpc-js');
const services = require('./proto/user_grpc_pb');
const API = require("./api");
const mongoose = require('./config/mongoose');


// mongoose.connect();




let api = null;


async function main() {

    api = new API(grpc);
    let server = new grpc.Server();
    server.addService(services.UserSvcService, {
        register: api.register,
        // login: api.login,
        verify: api.verify,
        // getUser: api.getUser,
    });
    let address = process.env.HOST + ":" + process.env.PORT;
    server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log("Server running at " + address);
    });
}

main();

