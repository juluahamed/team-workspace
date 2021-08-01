// const bcrypt = require('bcrypt');
// const {verifyJwt, generateToken} = require("./auth");
const messages = require('./proto/project_pb');
const {ProjectRead, ProjectWrite} = require('./models/project.model');


module.exports = class API {
  constructor(grpc) {
    this.grpc = grpc;
  }

  create = async (call, callback) => {
    const resp = new messages.ProjectResponse();
    try {

      console.log('Inside  callback');
      const name = call.request.getName();
      const owner =  call.request.getOwner();
      const defaultProject = call.request.getDefault();
      const sharedUsers = call.request.getSharedusersList();
      
      const newProject = new ProjectWrite({name, owner, sharedUsers, defaultProject});
      const savedProject = await newProject.save();
      
      console.log('savedProject', savedProject);
      resp.setProjectid(savedProject.projectId)
      resp.setName(savedProject.name);
      resp.setOwner(savedProject.owner);
      resp.setDefault(savedProject.defaultProject)
      resp.setSharedusersList(savedProject.sharedUsers)
      resp.setUpdatedat(savedProject.updatedAt);
      resp.setCreatedat(savedProject.createdAt)
      callback(null, resp);

    } catch(err) {
        console.log(err)
        resp.setError('Unexpected error occured. Check ProjectService logs');
        callback(null, resp)
    }
  }
};