const uuid=require("uuid");
const mongoose = require('mongoose');
const {readConnection, writeConnection} = require('../config/mongoose')

const projectSchema=new mongoose.Schema({
    projectId: {
      type: String,
      default: () => uuid.v4()
    },
    name: {
      type: String,
      required: true
    },
    defaultProject: {
      type: Boolean,
      default: false
    },
    sharedUsers: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    }
},{
  timestamps: true,
});

projectSchema.pre('save', async function save(next) {
    try {  
      return next();
    } catch (error) {
      return next(error);
    }
});


projectSchema.method({
    getPublic() {
      const transformed = {};
      const fields = ['projectId', 'name', 'default', 'sharedUsers', 'owner', 'createdAt', 'updatedAt' ];
  
      fields.forEach((field) => {
        transformed[field] = this[field];
      });
  
      return transformed;
    },
    getAll() {
        const transformed = {};
        const fields = ['projectId', 'name', 'default', 'sharedUsers', 'owner', 'createdAt', 'updatedAt' ];
    
        fields.forEach((field) => {
            transformed[field] = this[field];
        });
  
      return transformed;
    }
});

projectSchema.statics = {
    async get(id) {
      try {
        let project;
  
        if (mongoose.Types.ObjectId.isValid(id)) {
          project = await this.findById(id).exec();
        }
        if (project) {
          return project;
        } 
        return null

      } catch (error) {
        throw error;
      }
    },
    async getByprojectId(projectId) {
      try {
        let project;
        project = await this.findOne({projectId}).exec();
  
        if (project) {
          return project;
        }
        return null;
  
      } catch (error) {
        throw error;
      }
    },
  };
  


projectSchema.index({projectId: 1});


module.exports = {
    ProjectRead: readConnection.model('Project', projectSchema),
    ProjectWrite: writeConnection.model('Project', projectSchema)
}