const uuid=require("uuid");
const mongoose = require('mongoose');
const {readConnection, writeConnection} = require('../config/mongoose')

const userSchema=new mongoose.Schema({
    userId: {
      type: String,
      default: () => uuid.v4()
    },
    userName: {
      type: String,
      required: true
    },
    passwordHash: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    }
}, {
  timestamps: true,
});

userSchema.pre('save', async function save(next) {
    try {
      // if (!this.isModified('password')) return next();
  
      // const rounds = env === 'test' ? 1 : 10;
  
      // const hash = await bcrypt.hash(this.password, rounds);
      // this.password = hash;
  
      return next();
    } catch (error) {
      return next(error);
    }
});


userSchema.method({
    getPublic() {
      const transformed = {};
      const fields = ['userId', 'userName', 'name'];
  
      fields.forEach((field) => {
        transformed[field] = this[field];
      });
  
      return transformed;
    },
    getAll() {
        const transformed = {};
        const fields = ['userId', 'userName', 'passwordHash'];
    
        fields.forEach((field) => {
            transformed[field] = this[field];
        });
  
      return transformed;
    }
});

userSchema.statics = {
    async get(id) {
      try {
        let user;
  
        if (mongoose.Types.ObjectId.isValid(id)) {
          user = await this.findById(id).exec();
        }
        if (user) {
          return user;
        } 
        return null

      } catch (error) {
        throw error;
      }
    },
    async getByUserId(userId) {
      try {
        let user;
          user = await this.findOne({userId}).exec();
  
        if (user) {
          return user;
        }
        return null;
  
      } catch (error) {
        throw error;
      }
    },
  };
  


userSchema.index({userId: 1});
userSchema.index({userName: 1}, {unique: true})


module.exports = {
    UserRead: readConnection.model('User', userSchema),
    UserWrite: writeConnection.model('User', userSchema)
}