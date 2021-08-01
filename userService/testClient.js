const messages = require('./proto/user_pb');
const services = require('./proto/user_grpc_pb');
const grpc = require('@grpc/grpc-js');

function main() {
    const client = new services.UserSvcClient('localhost:50051', grpc.credentials.createInsecure());

    let registerReq = new messages.UserRegisterRequest();
    registerReq.setName("Hello");
    registerReq.setUsername("hh@hh.com");
    registerReq.setPassword("Hash");
    client.register(registerReq, function(err, response) {
        console.log('This is a response from ', response);
    });
}

main();