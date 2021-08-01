const messages = require('../../proto/entity_pb');
const services = require('../../proto/entity_grpc_pb');
const grpc = require('@grpc/grpc-js');
const client = new services.EntitySvcClient('localhost:50053', grpc.credentials.createInsecure());

const createResponseParser = (response) => {
    if (response &&  response.array && response.array.length === 8) {
        return {
            success: true,
            statusCode: 200,
            data: {
                entityId: response.array[0],
                name: response.array[1],
                owner: response.array[2],
                parent: response.array[3],
                content: response.array[4],
                sharedUsers: response.array[5],
                entityType: response.array[6],
                projectId: response.array[7]

            }
        }
    } else {
        let error = response.array[8] ? response.array[8] : 'Unexpected error from entityService. Check logs'
        return {
            success: false,
            statusCode: 400,
            error
        }
    } 
}

exports.createEntity = async (req, res, next) => {
    console.log('Inside here')
    try {
        
        const createReq = new messages.CreateEntityRequest();
        createReq.setName(req.body.name);
        createReq.setOwner(req.body.owner);
        createReq.setSharedusersList(req.body.sharedUsers);
        createReq.setProjectid(req.body.projectId);
        createReq.setEntitytype(req.body.entityType)
        createReq.setContent(req.body.content)
        createReq.setParent(req.body.parent)


        client.create(createReq, function(err, response) {
            console.log('This is a response from ', response);

            const result = createResponseParser(response)
            res.status(result.statusCode).json(result)
        });
    } catch (error) {
        console.log('Error:', error)
        next(error);
    }
};


exports.listEntity = async (req, res, next) => {
    console.log('Inside here')
    try {
        
        const listReq = new messages.ListEntityRequest();
        listReq.setParententityid(req.body.parentEntityId)
        listReq.setRequesterid(req.body.requesterId);
        listReq.setProjectid(req.body.projectId);


        client.list(createReq, function(err, response) {
            console.log('This is a response from ', response);

            const result = createResponseParser(response)
            res.status(result.statusCode).json(result)
        });
    } catch (error) {
        console.log('Error:', error)
        next(error);
    }
};

exports.createDefaultProject =  (owner) => {
    const createReq = new messages.CreateProjectRequest();
    createReq.setName('Default Project');
    createReq.setOwner(owner);
    createReq.setDefault(true);
    createReq.setSharedusersList([]);
    client.create(createReq, function(err, response) {
        console.log('This is a response from create default project', response);
    });

};
