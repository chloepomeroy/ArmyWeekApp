import dotenv from 'dotenv'

dotenv.config({ path: './server/.env.local' })

export const config = {
  mongoDBUrl: process.env.DBCONNECTION,
  endpoint: process.env.COSMOSDB_HOST,
  key: process.env.COSMOSDB_PASSWORD,
  databaseId: process.env.COSMOSDB_DBNAME,
  containerId: process.env.COSMOSDB_CONTAINERID,
  partitionKey: { kind: "Hash", paths: ["/'\$v'/ItemId/'\$v'"] },
  cosmosPort: process.env.COSMOSDB_PORT,
  user: process.env.COSMOSDB_USER,
  sessionSecret: process.env.SESSION_SECRET,
  storage: process.env.AZURE_STORAGE_CONNECTION_STRING1,
  account: "caarmydata",
  sas: process.env.SAS,
  baseImageUrl: "https://caarmydata.blob.core.windows.net/images/",
  cosmosConnectionString: process.env.COSMOS_CONNECTION_STRING,
  cosmosDatabaseName: process.env.COSMOS_DATABASE_NAME,
  configPort: process.env.PORT
  };
