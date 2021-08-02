// const bcrypt = require('bcrypt');
// const {verifyJwt, generateToken} = require("./auth");
const messages = require('./proto/entity_pb');
const {EntityRead, EntityWrite, writeConnection, readConnection, entitySchema} = require('./models/entity.model');


module.exports = class API {
  constructor(grpc) {
    this.grpc = grpc;
  }

  create = async (call, callback) => {
    const resp = new messages.EntityResponse();
    try {

      console.log('Inside  callback');

      const name = call.request.getName();
      const owner =  call.request.getOwner();
      const sharedUsers = call.request.getSharedusersList();
      const parent = call.request.getParent();
      const content = call.request.getContent();
      const entityType = call.request.getEntitytype();
      const projectId = call.request.getProjectid();
      const createdAt = call.request.getCreatedat();
      const updatedAt = call.request.getUpdatedat();

      const dbConn = writeConnection.useDb(projectId)
      const model = dbConn.model('Entity', entitySchema);
      
      const newEntity = new model({name, owner, sharedUsers, parent, content, entityType, projectId, createdAt, updatedAt});
      const savedEntity = await newEntity.save();
      
      console.log('savedEntity', savedEntity);
      resp.setProjectid(savedEntity.projectId);
      resp.setName(savedEntity.name);
      resp.setOwner(savedEntity.owner);
      resp.setSharedusersList(savedEntity.sharedUsers)
      resp.setUpdatedat(savedEntity.updatedAt);
      resp.setCreatedat(savedEntity.createdAt);
      resp.setEntitytype(savedEntity.entityType);
      resp.setContent(savedEntity.content);
      resp.setParent(savedEntity.parent);
      resp.setEntityid(savedEntity.entityId)
      callback(null, resp);

    } catch(err) {
        console.log(err)
        resp.setError('Unexpected error occured. Check EntityService logs');
        callback(null, resp)
    }
  }
  list = async(call, callback)=> {
    const resp = new messages.EntityListResponse();

    try {

      console.log('Inside  callback');
      const parentEntity = call.request.getParententityid();
      const requesterid = call.request.getRequesterid();
      const projectId = call.request.getProjectid();


      const dbConn = readConnection.useDb(projectId)
      const model = dbConn.model('Entity', entitySchema);
      
      const entities = await model.find({parent: parentEntity, owner: requesterid});
      

      // const newEntity = new model({name, owner, sharedUsers, parent, content, entityType, projectId, createdAt, updatedAt});
      // const savedEntity = await newEntity.save();
      
      console.log('retrievedEntities', entities);
      // resp.setEntitiesList(entities);
      // resp.temp = entities;
      callback(null, resp, entities);

    } catch(err) {
        console.log(err)
        resp.setError('Unexpected error occured. Check EntityService logs');
        callback(null, resp)
    }

  }
};