const config = require("../config");
var mongoose = require('mongoose');

const {
  endpoint,
  key,
  databaseId,
  port,
  user
} = config

mongoose.connect("mongodb://"+endpoint+":"+port+"/"+databaseId+"?ssl=true&replicaSet=globaldb", {
  auth: {
    username: user,
    password: key
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false
})
.then((res) => { 
  console.log('Connection to CosmosDB successful', res)
  return res
})
.catch((err) => console.error(err));

module.exports = mongoose;
