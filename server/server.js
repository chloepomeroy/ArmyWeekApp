#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import fs from 'fs'
import path from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express'
import http from 'http'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import busboy from 'connect-busboy'
import bodyParser from 'body-parser'

// GraphQL Imports
import { ApolloServer } from 'apollo-server-express'
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
  } from 'apollo-server-core';
import { CosmosDataSource } from 'apollo-datasource-cosmosdb'
import { CosmosClient } from '@azure/cosmos'
import { schema } from './schema.js'

import { config } from './config.js'

const {
  cosmosConnectionString,
  cosmosDatabaseName,
  configPort
} = config

// REST imports
// import { router as index } from './routes/index-old.js'
// //const index = require("./routes/index-old");
// const upload = require("./routes/upload");
// const image = require("./routes/image");
// const category = require("./routes/category");
// const training = require("./routes/training");

//************** REST and Normal Serving *************** */
  const app = express()

  /**
   * Get port from environment and store in Express.
   */

  var port = normalizePort(configPort || "3001");
  app.set("port", port);


  /**
   * Create HTTP server.
   */

  const server = http.createServer(app);

  app.use(logger("dev"));
  app.use(busboy());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "build")));

  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "jade");

  // REST API endpoints
  // app.use("/api", index);
  // app.use("/upload", upload);
  // app.use("/image", image);
  // app.use("/category", category);
  // app.use("/training", training);

  app.use(express.static(path.join(__dirname, 'build', 'index.html')))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);

//************ GRAPHQL/COSMOSDB SETUP  ******************

  /**
   * Create CosmosDB Data Sources
   * @param {} containerId 
   * @returns 
   */
  const buildCosmosDataSource = (
    containerId
  ) => {
    const client = new CosmosClient(
      cosmosConnectionString
    );
    const container = client
      .database(cosmosDatabaseName)
      .container(containerId);
      
    return new CosmosDataSource(container);
  }

  // Create ApolloServer - used to provide a GraphQL endpoint
  async function startApolloServer() {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
      schema, 
      csrfPrevention: true,
      introspection: true,
      cache: 'bounded',
      playground: process.env.NODE_ENV === 'development' ? true : false,
      plugins: [
          ApolloServerPluginDrainHttpServer({ httpServer }),
          ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ],
      dataSources: () => ({
        training: buildCosmosDataSource('training'),
        rating: buildCosmosDataSource('ratings')
      })
    })

    await server.start();
    server.applyMiddleware({ app, path: '/' })

    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve))
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  }

  startApolloServer()

//*****************HELPERS  *********** */

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
