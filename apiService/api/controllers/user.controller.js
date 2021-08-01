const messages = require('../../proto/user_pb');
const services = require('../../proto/user_grpc_pb');
const grpc = require('@grpc/grpc-js');
const client = new services.UserSvcClient('localhost:50051', grpc.credentials.createInsecure());
const {createDefaultProject} = require('./project.controller')

const regResponseParser = (response) => {
    if (response &&  response.array && response.array.length === 4) {

        createDefaultProject(response.array[0])
        return {
            success: true,
            statusCode: 200,
            data: {
                userId: response.array[0],
                userName: response.array[1],
                name: response.array[2],
                token: response.array[3],
                error: response.array[4]
            }
        }
    } else {
        let error = response.array[4] ? response.array[4] : 'Unexpected error from userService. Check logs'
        return {
            success: false,
            statusCode: 400,
            error
        }
    } 
}


const loginResponseParser = (response) => {
    if (response &&  response.array && response.array.length === 4) {
        return {
            success: true,
            statusCode: 200,
            data: {
                userId: response.array[0],
                userName: response.array[1],
                name: response.array[2],
                token: response.array[3],
                error: response.array[4]
            }
        }
    } else {
        let error = response.array[4] ? response.array[4] : 'Unexpected error from userService. Check logs'
        return {
            success: false,
            statusCode: 400,
            error
        }
    }

}

const verifyResponseParser = (response) => {
    if (response &&  response.array && response.array.length === 3) {
        return  {
                userId: response.array[0],
                userName: response.array[1],
                name: response.array[2],
                error: response.array[3]
            }

    } else {
        let error = response.array[3] ? response.array[3] : 'Unexpected error from userService. Check logs'
        return false
    }

}

exports.registerUser = async (req, res, next) => {
    console.log('Inside here')
    try {
        const registerReq = new messages.UserRegisterRequest();
        registerReq.setName(req.body.name);
        registerReq.setUsername(req.body.userName);
        registerReq.setPassword(req.body.password);
        client.register(registerReq, function(err, response) {
            console.log('This is a response from ', response);

            const result = regResponseParser(response)
            res.status(result.statusCode).json(result)
        });
    } catch (error) {
        console.log('Error:', error)
        next(error);
    }
};


exports.loginUser = async (req, res, next) => {
    console.log('Inside here')
    try {
        const loginReq = new messages.UserLoginRequest();
        loginReq.setUsername(req.body.userName);
        loginReq.setPassword(req.body.password);
        client.login(loginReq, function(err, response) {
            console.log('This is a response from ', response);

            const result = loginResponseParser(response)
            res.status(result.statusCode).json(result)
        });
    } catch (error) {
        console.log('Error:', error)
        next(error);
    }
};

exports.verify = async (req, res, next) => {
    console.log('Inside here')
    try {
        const getUserverifyReq = new messages.UserVerifyRequest();
        getUserverifyReq.setToken(req.header('authorization'));
        client.verify(getUserverifyReq, function(err, response) {
            console.log('This is a response from ', response);

            const result = verifyResponseParser(response)
            if (result) {
                req.local= result
                next()
            } else {
                res.status(400).json({
                    success: false,
                    error: 'Token validation failed'
                })
            }
            // res.status(result.statusCode).json(result)
        });
    } catch (error) {
        console.log('Error:', error)
        next(error);
    }
};


exports.getUser = async (req, res, next) => {
    console.log('Inside here')
    try {
        const getUserReq = new messages.GetUserRequest();
        getUserReq.setName(req.body.name);
        client.register(registerReq, function(err, response) {
            console.log('This is a response from ', response);

            const result = regResponseParser(response)
            res.status(result.statusCode).json(result)
        });
    } catch (error) {
        console.log('Error:', error)
        next(error);
    }
};