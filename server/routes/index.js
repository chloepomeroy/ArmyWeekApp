var express = require("express");
var router = express.Router();
var questionsService = require("../services/questionsService");
var ideasService = require("../services/ideasService");
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Question API
router.get("/questions", async function (req, res, next) {
  let result = await questionsService.read({});
  res.json(result);
});

router.post("/add-question", async function (req, res, next) {
  const createdQuestion = await questionsService.create(req.body);
  res.json(createdQuestion);
});

router.post("/update-question/:filter", async function (req, res, next) {
  let filter = req.params.filter
  const updatedQuestion = await questionsService.update(filter, req.body.object);
  res.json(updatedQuestion);
});

router.post("/signal/:id&:signal&:accountId", async function (req, res, next) {
  let id = req.params.id
  let signal = req.params.signal
  let accountId = req.params.accountId
  const updatedQuestion = await questionsService.signal(id, signal, accountId);
  res.json(updatedQuestion);
});

router.delete("/delete/:filter", async function (req, res, next) {
  let filter = req.params.filter
  const result = await questionsService.delete(filter);
  res.json(result);
});

// Idea API
router.get("/ideas", async function (req, res, next) {
  let result = await ideasService.read({});
  res.json(result);
});

router.post("/add-idea", async function (req, res, next) {
  const createdQuestion = await ideasService.create(req.body);
  res.json(createdQuestion);
});

router.post("/update-idea/:filter", async function (req, res, next) {
  let filter = req.params.filter
  const updatedIdea = await ideasService.update(filter, req.body.object);
  res.json(updatedIdea);
});

router.post("/signal/:id&:signal&:accountId", async function (req, res, next) {
  let id = req.params.id
  let signal = req.params.signal
  let accountId = req.params.accountId
  const updatedIdea = await ideasService.signal(id, signal, accountId);
  res.json(updatedIdea);
});

router.delete("/delete/:filter", async function (req, res, next) {
  let filter = req.params.filter
  const result = await ideasService.delete(filter);
  res.json(result);
});

// App API (Ceramic)
router.post('/token', cors(), async (req, res) => {
  const accountId = req.body.accountId
  if(!accountId) res.sendStatus(403)
  jwt.sign({ accountId: accountId }, process.env.SECRET_KEY, (err, token) => {
    res.json({
      token
    })
  });
});


router.post('/appseed', cors(), verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      const seed = (process.env.APP_SEED).slice(0, 32)
      res.json({
        seed: seed,
        authData
      });
    }
  })
});


router.post('/funding-seed', cors(), verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      const seed = process.env.FUNDING_ACCOUNT
      res.json({
        seed: seed,
        authData
      });
    }
  })
});

router.post('/sendy', cors(), verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      const seed = process.env.SENDY_API
      res.json({
        seed: seed,
        authData
      });
    }
  })
});

// Verify Token
function verifyToken(req, res, next){
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined'){
    // Split at the space
    const bearerToken = bearerHeader.split(' ')[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    //Forbidden
    res.sendStatus(403);
  }
}

module.exports = router;
