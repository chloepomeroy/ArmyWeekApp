
import { Image } from '../models/image.js'
import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob'
import btoa from 'btoa'
import { config } from '../config.js'

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

    async findOne(query) {
        /** Reading data from CosmosDB**/
        try{
          let images = await Image.findOne(query).exec()
          return images
        } catch (err) {
          console.log('problem reading from db', err)
          return false
        }
      },
    
      async findAll() {
        /** Reading data from CosmosDB**/
        try{
          let images = await Image.find({})
          return images
        } catch (err) {
          console.log('problem reading from db', err)
          return false
        }
      },
    
      async add(args) {        
        
        let iid = generateId()

        let data = {
            imageId: iid,
            title: args.title,
            description: args.description,
            imageFileName: args.imageFileName,
            submitter: args.submitter,
            url: args.url,
            category: args.category,
            ratingId: iid
        }
        
        /** Write data to CosmosDB **/
        try{
            let newImage = new Image(data)
            let saved = await newImage.save()
            return saved
        } catch (err) {
            console.log('problem writing to db', err)
            return false
        }
      },
    
    
      async update(filter, data) {
        /** update existing data to CosmosDB **/
        try{
          let updated = await Image.updateOne(filter, data)
          console.log('updated', updated)
          return true
         } catch (err) {
          console.log('problem updating Image record', err)
          return false
         }
      },
    
      async deleteOne(args){
         /** delete identified data from CosmosDB **/
         try{
          let deleted = await Image.deleteOne(args)
          console.log('deleted', deleted)
          return true
         } catch (err) {
          console.log('problem deleting Image record', err)
          return false
         }
      },
    
      async deleteAll(args){
        /** delete all identified data from CosmosDB **/
        try{
         await Image.deleteMany(args)
         return true
        } catch (err) {
         console.log('problem deleting all Image records', err)
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
 
};

export { imageService }
