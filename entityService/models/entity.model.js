const uuid=require("uuid");
const mongoose = require('mongoose');
const {readConnection, writeConnection} = require('../config/mongoose')

const entitySchema=new mongoose.Schema({
    entityId: {
      type: String,
      default: () => uuid.v4()
    },
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    parent: {
      type: String,
      default: "root"
    },
    entityType: {
      type: String,
      required: true,
      enum: ["FILE", "FOLDER"]
    },
    sharedUsers: [{
      type: String,
      required: true
    }],
    owner: {
      type: String,
      required: true
    },
    projectId: {
      type: String,
      required: true,
    }
},{
  timestamps: true,
});

entitySchema.pre('save', async function save(next) {
    try {  
      return next();
    } catch (error) {
      return next(error);
    }
});


entitySchema.method({
    getPublic() {
      const transformed = {};
      const fields = ['entityId', 'parent', 'projectId', 'name', 'sharedUsers', 'owner', 'createdAt', 'updatedAt', 'content' ];
  
      fields.forEach((field) => {
        transformed[field] = this[field];
      });
  
      return transformed;
    },
    getAll() {
        const transformed = {};
        const fields = ['entityId', 'parent', 'projectId', 'name', 'sharedUsers', 'owner', 'createdAt', 'updatedAt', 'content' ];
    
        fields.forEach((field) => {
            transformed[field] = this[field];
        });
  
      return transformed;
    }
});

entitySchema.statics = {
    async get(id) {
      try {
        let entity;
  
        if (mongoose.Types.ObjectId.isValid(id)) {
          entity = await this.findById(id).exec();
        }
        if (entity) {
          return entity;
        } 
        return null

      } catch (error) {
        throw error;
      }
    },
    async getByprojectId(projectId) {
      try {
        let entity;
        entity = await this.findOne({projectId}).exec();
  
        if (entity) {
          return entity;
        }
        return null;
  
      } catch (error) {
        throw error;
      }
    },
  };
  


  entitySchema.index({projectId: 1});


module.exports = {
    EntityRead: readConnection.model('Entity', entitySchema),
    EntityWrite: writeConnection.model('Entity', entitySchema),
    readConnection,
    writeConnection,
    entitySchema
}