// default
let config = {
    SECRETSET_CALL: 'https://adip.azurewebsites.net/api/store-keypair',
    SECRETGET_CALL: 'https://adip.azurewebsites.net/api/get-keypair',
    MICROSOFTGRAPH_CALL: 'https://graph.microsoft.com/v2.0'
  }

if(process.env.ENV === 'localhost') {
  config = {
    ...config,
    TOKEN_CALL: 'http://localhost:3000/api/token',
    APPSEED_CALL: 'http://localhost:3000/api/appseed',
    FUNDING_SEED_CALL: 'http://localhost:3000/api/funding-seed',
    SENDY_API_KEY_CALL: 'http://localhost:3000/api/sendy',
    DB_CALL: 'http://localhost:3000/api/db'
  }
}

if(process.env.ENV === 'test'){
  config = {
    ...config,

  }
}


if (process.env.ENV === 'prod') {
    config = {
      ...config,
       
      }
}

export { config }
