var express = require("express")
var router = express.Router()

// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const multer = require('multer')
// const upload = multer();
// const { DefaultAzureCredential } = require("@azure/identity");
// const BlockBlobClient = require('@azure/storage-blob')
// const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
// const getStream = require('into-stream')
// const config = require('../config')
// const FileReader = require('filereader')

const categoryService = require('../services/categoryService')

const handleError = (err, res) => {
  res.status(500);
  res.render('error', { error: err })
};

// Add a new training category
router.post("/add", async (req, res) => {
  try{
    const {
      parentCategoryName,
      parentCategoryType,
      childCategoryName,
      childCategoryOrder,
      name
    } = req.body
    const createdRecord = await categoryService.create(name)
    res.send(createdRecord)
  } catch (error) {
    console.log(error.message)
  }
})

// Retrieve all training categories
router.get('/get-all', async (req, res, next) => {
  const result = []
  try {
    const categories = await categoryService.read()
    res.send(result)
  } catch (error) {
      console.log(error.message)
  }
})

module.exports = router;
