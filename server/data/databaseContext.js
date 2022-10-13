import { config } from '../config.js'
import mongoose from 'mongoose'

const {
  endpoint,
  key,
  databaseId,
  cosmosPort,
  user
} = config

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise

mongoose.connect("mongodb://"+endpoint+":"+cosmosPort+"/"+databaseId+"?ssl=true&replicaSet=globaldb", {
  auth: {
    username: user,
    password: key
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false
})
.then((res) => { 
  console.log('Connection to CosmosDB successful')
  return res
})
.catch((err) => console.error(err))

export default mongoose