const mongoose = require('mongoose');
const dotenv = require("dotenv");
require("dotenv").config()
console.log(process.env.MONGODB_CONNECTION_STRING)
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/trek',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
