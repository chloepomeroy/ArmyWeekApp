const { json } = require("body-parser")
const image = require('../models/image')
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob")
const btoa = require('btoa')
const config = require('../config')

const { storage, account, sas } = config

const imageContainerName = 'images'

const blobService = BlobServiceClient.fromConnectionString(storage);
const uploadOptions = { bufferSize: 4 * 1024 * 1024, maxConcurrency: 20 };

function generateId() {
    let buf = Math.random([0, 999999999])
    let b64 = btoa(buf);
    return b64.toString()
}

const imageService = {
 
  async read(query) {
    /** Reading data from CosmosDB - with discriminator **/
    try{
      let images = await image.find(query)
      return images
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async saveToStorage(imageFile, imageFilename, link) {        
    // upload image to storage if no link provided
    try{
        if(!link){
            const blobName = imageFilename.filename
            const containerClient = blobService.getContainerClient(imageContainerName)
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);

            await blockBlobClient.uploadStream(
                imageFile,
                uploadOptions.bufferSize,
                uploadOptions.maxConcurrency,
                { blobHTTPHeaders: { blobContentType: imageFilename.mimetype } },
            )

            // get url of imageFile and add to data object
            link = containerClient.getBlockBlobClient(blobName).url
        }
        return link
    } catch (err) {
        console.log('error uploading image', err)
        return false
    }
},

  async createImageRecord(imageFilename, imageTitle, description, submitter, category, link) {        
        // add image to database
        try{
            let data = {
                imageId: generateId(),
                imageFileName: imageFilename,
                title: imageTitle,
                description: description,
                submitter: submitter,
                url: link,
                category: category,
                likes: [],
                dislikes: [],
                neutrals: []
            }
            
            /** Write image data to CosmosDB **/
            try{
                let newImage = new image(data)
                let saved = await newImage.save()
                console.log('saved', saved)
                return true
            } catch (err) {
                console.log('problem writing to db', err)
                return false
            }

        } catch (err) {
            console.log('error uploading image', err)
        }
  },



  async update(filter, updatedImageData) {
    /** update existing data to CosmosDB - with discriminator **/
    try{
      await image.updateOne(JSON.parse(filter), updatedImageData)
      return true
     } catch (err) {
      console.log('problem updating image record', err)
      return false
     }
  },

  async delete(filter){
     /** delete identified image data from CosmosDB - with discriminator **/
     try{
      await image.deleteOne(JSON.parse(filter))
      return true
     } catch (err) {
      console.log('problem deleting image record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB - with discriminator **/
    try{
     await image.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all image records', err)
     return false
    }
  },

  async signal(id, signalType, accountId){
      let resourceProperties = await image.findById(id)
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
        await image.updateOne(
          {_id: id}, 
          {
            likes: resourceProperties.likes,
            dislikes: resourceProperties.dislikes,
            neutrals: resourceProperties.neutrals
          })
        return true
      } catch (err) {
        console.log('problem recording image signal', err)
        return false
      }
  }
};

module.exports = imageService;
