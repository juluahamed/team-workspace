require('dotenv').config();
const mongoose = require('mongoose');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

const mongoURI = process.env.DB_URI;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  // process.exit(-1);
});

mongoose.connection.on('connected', () => {
    console.info('MongoDB connected!');
});

mongoose.connection.once('open', () => {
    console.info('MongoDB connection opened!');
});

mongoose.connection.on('reconnected', () => {
    console.info('MongoDB reconnected!');
});

mongoose.connection.on('disconnected', () => {
    console.info('MongoDB disconnected!');
});



/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
// exports.connect = () => {
//   mongoose.connect(mongoURI, {
//     keepAlive: 1,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     // ssl: true,
//     // sslValidate: true,
//     // sslCA: require('fs').readFileSync(`${__dirname}/rds-combined-ca-bundle.pem`)
//   });
//   return mongoose.connection;
// };

const readConnection = mongoose.createConnection(mongoURI, {
  keepAlive: 1,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const writeConnection = mongoose.createConnection(mongoURI, {
  keepAlive: 1,
  useNewUrlParser: true,
  useFindAndModify: false,
});


module.exports = {
  readConnection,
  writeConnection
}
