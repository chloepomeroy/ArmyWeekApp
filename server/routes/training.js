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
const trainingService = require('../services/trainingService')

const handleError = (err, res) => {
  res.status(500);
  res.render('error', { error: err });
};


// CRUD

// Add record to the database
router.post("/add", async (req, res) => {
  console.log('req body', req)
  const {
    title,
    description,
    imageFileName,
    imageUrl,
    submitter,
    subject,
    level,
    duration,
    learningPathway,
    trainingLink,
    educator
  } = req.body
  const createdRecord = await trainingService.createTrainingRecord(
    title,
    description,
    imageFileName,
    imageUrl,
    submitter,
    subject,
    level,
    duration,
    learningPathway,
    trainingLink,
    educator)
  res.send(createdRecord)
})


// Retrieve all records
router.get('/get-all', async (req, res, next) => {
  const result = []
  try {
    const training = await trainingService.read()
    res.send(result)
  } catch (error) {
      console.log(error.message)
  }
})

module.exports = router;
