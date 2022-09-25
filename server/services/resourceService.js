const { json } = require("body-parser");
const resource = require('../models/resource');
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const getStream = require('into-stream')
const config = require('../config')

const { storage, account, sas } = config

const containerName = 'resources'
const imageContainerName = 'images'


const blobService = BlobServiceClient.fromConnectionString(storage);
const uploadOptions = { bufferSize: 4 * 1024 * 1024, maxConcurrency: 20 };

function generateId() {
    let buf = Math.random([0, 999999999])
    let b64 = btoa(buf);
    return b64.toString()
}

const resourcesService = {
 
  async read(query) {
    /** Reading data from CosmosDB - with discriminator **/
    try{
      let resources = await resource.find(query)
      return resources
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async create(file, filename, thumb) {
     console.log('file', file)
     console.log('filename', filename)
     // first save files to storage then add to database

        try{
            const blobName = filename.filename
            console.log('blobname', blobName)
            // const stream = getStream(file.buffer)
            const containerClient = blobService.getContainerClient(containerName)
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);

            await blockBlobClient.uploadStream(
                file,
                uploadOptions.bufferSize,
                uploadOptions.maxConcurrency,
                { blobHTTPHeaders: { blobContentType: filename.mimetype } },
            )

            // get url of file and add to data object
            let url = containerClient.getBlockBlobClient(blobName)
            let data = {
                fileId: generateId(),
                fileName: filename.filename,
                title: filename.filename,
                description: 'a file',
                submitter: 'me',
                url: url.url,
                imgName: 'nope',
                category: '',
                likes: [],
                dislikes: [],
                neutrals: []
            }
            //  let data = {...filename, ['url']: url.url}
            console.log('data', data)
            /** Write data to CosmosDB - with discriminator **/
            
            try{
                let newresource = new resource(data)
                let saved = await newresource.save()
                console.log('saved', saved)
                return true
            } catch (err) {
                console.log('problem writing to db', err)
                return false
            }
                
        } catch (err) {
            console.log('error storing resource', err)
        }    
  },

  async update(filter, aresource) {
    /** update existing data to CosmosDB - with discriminator **/
    try{
      await resource.updateOne(JSON.parse(filter), aresource)
      return true
     } catch (err) {
      console.log('problem updating record', err)
      return false
     }
  },

  async delete(filter){
     /** delete identified data from CosmosDB - with discriminator **/
     try{
      await resource.deleteOne(JSON.parse(filter))
      return true
     } catch (err) {
      console.log('problem deleting record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB - with discriminator **/
    try{
     await resource.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all records', err)
     return false
    }
  },

  async signal(id, signalType, accountId){
      let resourceProperties = await resource.findById(id)
      console.log("resourceProperties", resourceProperties)
      let hasLiked = false
      let hasDisLiked = false
      let hasNeutral = false
          
      hasLiked = resourceProperties.likes.includes(accountId)
      hasDisLiked = resourceProperties.dislikes.includes(accountId)
      hasNeutral = resourceProperties.neutrals.includes(accountId)

      if(signalType == 'like' && !hasLiked){
          resourceProperties.likes.push(accountId)
          
          if(hasDisLiked){
              let k = 0
              while (k < resourceProperties.dislikes.length){
                  if(resourceProperties.dislikes[k] == accountId){
                      resourceProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < resourceProperties.neutrals.length){
                  if(resourceProperties.neutrals[k] == accountId){
                      resourceProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'dislike' && !hasDisLiked){
          resourceProperties.dislikes.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < resourceProperties.likes.length){
                  if(resourceProperties.likes[k] == accountId){
                      resourceProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < resourceProperties.neutrals.length){
                  if(resourceProperties.neutrals[k] == accountId){
                      resourceProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'neutral' && !hasNeutral){
          resourceProperties.neutrals.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < resourceProperties.likes.length){
                  if(resourceProperties.likes[k] == accountId){
                      resourceProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasDisLiked){
              let k = 0
              while (k < resourceProperties.dislikes.length){
                  if(resourceProperties.dislikes[k] == accountId){
                      resourceProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
      }
      
      try{
        await resource.updateOne(
          {_id: id}, 
          {
            likes: resourceProperties.likes,
            dislikes: resourceProperties.dislikes,
            neutrals: resourceProperties.neutrals
          })
        return true
      } catch (err) {
        console.log('problem recording signal', err)
        return false
      }
  }
};

module.exports = resourcesService;
