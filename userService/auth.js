require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    verifyJwt: async (headerToken) => {
    try {
        const response = {}
        let token = headerToken
        const split=token.split(' ')
        if(split[0]!=="Bearer")
            throw(err)
        token=split[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("dec:"+JSON.stringify(decoded));
        for(key of Object.keys(decoded)) {
            response[key]=decoded[key]
        }
        return response
      }
      catch(err) {
          console.log(err)
          return false
      }

    },
    generateToken: async (payload) => {
            const token=jwt.sign(payload, process.env.JWT_SECRET, {algorithm:'HS256',expiresIn:'1d'});
            return token
    }
}