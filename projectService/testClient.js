const messages = require('./proto/project_pb');
const services = require('./proto/project_grpc_pb');
const grpc = require('@grpc/grpc-js');

function main() {
    const client = new services.ProjectSvcClient('localhost:50052', grpc.credentials.createInsecure());

    let createReq = new messages.CreateProjectRequest();
    createReq.setName("Hello");
    createReq.setOwner("123");
    createReq.setDefault(true);
    createReq.setSharedusersList([]);
    client.create(createReq, function(err, response) {
        console.log('This is a response from ', response);
    });
}

main();