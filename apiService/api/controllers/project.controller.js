const messages = require('../../proto/project_pb');
const services = require('../../proto/project_grpc_pb');
const grpc = require('@grpc/grpc-js');
const client = new services.ProjectSvcClient('project:50052', grpc.credentials.createInsecure());

const createResponseParser = (response) => {
    if (response &&  response.array && response.array.length === 5) {
        return {
            success: true,
            statusCode: 200,
            data: {
                projectId: response.array[0],
                name: response.array[1],
                owner: response.array[2],
                defaultProject: response.array[3],
                sharedUsers: response.array[4]
            }
        }
    } else {
        let error = response.array[5] ? response.array[5] : 'Unexpected error from projectService. Check logs'
        return {
            success: false,
            statusCode: 400,
            error
        }
    } 
}

exports.createProject = async (req, res, next) => {
    console.log('Inside here')
    try {
        
        const createReq = new messages.CreateProjectRequest();
        createReq.setName(req.body.name);
        createReq.setOwner(req.body.owner);
        createReq.setDefault(req.body.defaultProject);
        createReq.setSharedusersList(req.body.sharedUsers);

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
