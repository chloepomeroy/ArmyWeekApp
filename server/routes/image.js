import express from 'express'
let router = express.Router()
import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob'
import { config } from '../config.js'
import { imageService } from '../services/imageService.js'

const { storage, account, sas } = config

const imageContainerName = 'images'

const handleError = (err, res) => {
  res.status(500);
  res.render('error', { error: err });
};

const blobService = BlobServiceClient.fromConnectionString(storage);
const uploadOptions = { bufferSize: 4 * 1024 * 1024, maxConcurrency: 20 };

// Image CRUD

// // Add an image to storage and image record to the database
// router.post("/add", async (req, res) => {
//   console.log('req body', req)
//   const {
//     imageFilename,
//     imageTitle,
//     description,
//     submitter,
//     category,
//     link
//   } = req.body
//   const createdRecord = await imageService.createImageRecord(imageFilename, imageTitle, description, submitter, category, link)
//   res.send(createdRecord)
// })

// Add an image to storage and image record to the database
router.post("/add-to-storage", async (req, res) => {
  console.log('req body', req)
  req.pipe(req.busboy)
  req.busboy.on('file', async (fieldname, file, filename) => {
    console.log("Uploading Image: " + filename);
    const createdImage = await imageService.saveToStorage(file, filename)
    res.send(createdImage);
  })
});

// Retrieve a specific image url by filename
router.post('/get', (req, res, next) => {
  try{
    const blobName = req.body.fileName
    console.log('blobName', blobName)
    const containerClient = blobService.getContainerClient(containerName);
    console.log('containerClient', containerClient)
    const blobClient = containerClient.getBlobClient(blobName);
    console.log('blobClient', blobClient)
    console.log('url', blobClient.url)
    //res.download(containerClient.url, blobItem.value.name)
    res.send(blobClient.url)
    
  } catch (err) {
    console.log('err downloading file', err)
  }
})

// Retrieve all images in the storage container
router.get('/get-all', async (req, res, next) => {
  const result = []
  try {
    const containerClient = blobService.getContainerClient(imageContainerName);
    let iter = containerClient.listBlobsFlat();
    let blobItem = await iter.next()
    console.log('blobitem', blobItem);
    while (!blobItem.done) {
      result.push(blobItem.value.name)
        blobItem = await iter.next();
    }
    console.log('result: ' + result);
    res.send(result)

} catch (error) {
    console.log(error.message);
}


})

export { router }
