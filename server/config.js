require('dotenv').config({ path: './server/.env.local' })

const config = {
  endpoint: process.env.COSMOSDB_HOST,
  key: process.env.COSMOSDB_PASSWORD,
  databaseId: process.env.COSMOSDB_DBNAME,
  containerId: process.env.COSMOSDB_CONTAINERID,
  partitionKey: { kind: "Hash", paths: ["/'\$v'/ItemId/'\$v'"] },
  port: process.env.COSMOSDB_PORT,
  user: process.env.COSMOSDB_USER,
  storage: process.env.AZURE_STORAGE_CONNECTION_STRING1,
  account: "caarmydata",
  sas: process.env.SAS
  };
  
module.exports = config;