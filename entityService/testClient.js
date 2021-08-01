const messages = require('./proto/entity_pb');
const services = require('./proto/entity_grpc_pb');
const grpc = require('@grpc/grpc-js');

function main() {
    const client = new services.EntitySvcClient('localhost:50053', grpc.credentials.createInsecure());

    let createReq = new messages.CreateEntityRequest();
    createReq.setName("Hello");
    createReq.setOwner("123");
    createReq.setSharedusersList([]);
    createReq.setParent("root");
    createReq.setContent(" ");
    createReq.setEntitytype("FILE")
    createReq.setProjectid("abcd"),

    client.create(createReq, function(err, response) {
        console.log('This is a response from ', response);
    });
}

main();