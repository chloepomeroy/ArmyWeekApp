var express = require("express");
var router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const upload = multer();
const { DefaultAzureCredential } = require("@azure/identity");
const BlockBlobClient = require('@azure/storage-blob')
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const getStream = require('into-stream')
const config = require('../config')
const FileReader = require('filereader')

const { storage, account, sas } = config

const containerName = 'resources'

const handleError = (err, res) => {
  res.status(500);
  res.render('error', { error: err });
};

const getBlobName = originalName => {
  const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
  return `${identifier}-${originalName}`;
};

//const blobService = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`)

const blobService = BlobServiceClient.fromConnectionString(storage);
const uploadOptions = { bufferSize: 4 * 1024 * 1024, maxConcurrency: 20 };

// Presentation Uploads
router.post('/add-file', upload.any(), (req, res, next) => {
  let fileStatus = [];
  try{
    req.files.forEach(async(reqfile, i) => {
      console.log('reqfile', reqfile)
      const blobName = reqfile.originalname
      console.log('blobname', blobName)
      const stream = getStream(reqfile.buffer)
      const containerClient = blobService.getContainerClient(containerName)
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      await blockBlobClient.uploadStream(
        stream,
        uploadOptions.bufferSize,
        uploadOptions.maxConcurrency,
        { blobHTTPHeaders: { blobContentType: reqfile.mimetype } },
      );
      res.status(200).json({ fileStatus });
      res.render("success", { message: "File uploaded to Azure Blob storage." });
    })
  } catch (err) {
    throw err;
  }
})

async function blobToString(blob) {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onloadend = (ev) => {
      resolve(ev.target.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(blob);
  });
}

// Resource Retrieval
router.post('/get-file', (req, res, next) => {
  
  // Get blob content from position 0 to the end
  // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
  console.log('req', req)
  console.log('req body', req.body)
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

router.get('/get-all-files', async (req, res, next) => {
  const result = []
  try {
    const containerClient = blobService.getContainerClient(containerName);
    let iter = containerClient.listBlobsFlat();
    let blobItem = await iter.next()
    console.log('blobitem', blobItem);
    while (!blobItem.done) {
      //  var myblob = await getBlob (containerClient, blobItem.value.name);
        
        
      //  result.push(JSON.parse(myblob));
      result.push(blobItem.value.name)
        blobItem = await iter.next();
    }
    console.log('result: ' + result);
    res.send(result)

} catch (error) {
    console.log(error.message);
}


})

const getBlob = async (containerClient, blobname) => {
  var result = null;
  console.log('containerClient', containerClient)
  console.log('blobName', blobname)
  try {
      const blobClient = containerClient.getBlobClient(blobname);

      const downloadBlockBlobResponse = await blobClient.download();
     
      const body = await (downloadBlockBlobResponse.readableStreamBody)
      
      const downloaded = await streamToString(body);
      

      result = downloaded;
  } catch (error) {
      console.log(error.message);
  }

  return result;
};

async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data.toString());
    });
    readableStream.on("end", () => {
      resolve(chunks.join(""));
    });
    readableStream.on("error", reject);
  });
}

async function blobToString(blob) {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onloadend = (ev) => {
      resolve(ev.target.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(blob);
  });
}


module.exports = router;
