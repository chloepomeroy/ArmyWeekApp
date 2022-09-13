import { get, set, del } from './storage'

import { config } from '../state/config'

const axios = require('axios').default

export const {
    SECRETSET_CALL, SECRETGET_CALL,
    MICROSOFTGRAPH_CA, DB_CALL
  } = config

class Ceramic {

  async openDBConnection(microsoftAccount){

    let token = await axios.post(TOKEN_CALL, 
      {
      accountId: microsoftAccount
      }    
    )

    console.log('token', token)
    
    set(AUTH_TOKEN, token.data.token)
  
    let authToken = get(AUTH_TOKEN, [])

    let connectionString = await axios.post(DB_CALL, 
      {
        
      },
      {
        headers: {
        'Authorization': `Basic ${authToken}`
        }
      }
    )
    console.log('connectionString', connectionString)
    

    return connectionString.data.connection
  }

  async setVaultKeyPair(microsoftAccount){

    let token = await axios.post(TOKEN_CALL, 
      {
      accountId: microsoftAccount
      }    
    )
    
    set(AUTH_TOKEN, token.data.token)
  
    let authToken = get(AUTH_TOKEN, [])

   // let keyPair = KeyPair.fromRandom('ed25519')
    let keyString = {
      "accountId": microsoftAccount,
      "public_key": keyPair.getPublicKey().toString(),
      "private_key": keyPair.secretKey
    }

    let storeString = JSON.stringify(keyString)

    let secretSet = await axios.post(SECRETSET_CALL, 
      {
        accountId: microsoftAccount,
        keypair: storeString
      },
      {
        headers: {
        'Authorization': `Basic ${authToken}`
        }
      }
    )

    return secretSet.data.set
  }

  async getVaultKeyPair(microsoftAccount){
   
    let token = await axios.post(TOKEN_CALL, 
      {
      accountId: microsoftAccount
      }    
    )
    
    set(AUTH_TOKEN, token.data.token)
  
    let authToken = get(AUTH_TOKEN, [])
 
    let result = await axios.post(SECRETGET_CALL, 
      {
        accountId: microsoftAccount
      },
      {
        headers: {
        'Authorization': `Basic ${authToken}`
        }
      }
    )
   
    if(result.data.keyPair && result.data.keyPair != ""){
      return JSON.parse(result.data.keyPair.value)
    } else {
      return false
    }
  }

  }

export const ceramic = new Ceramic()