
require(__dirname  + '/lib/helper.js');
const express = require("express");
const fs = require('fs')
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require("./data/databaseContext");


const app = express();

// Make the database accessible off the app object
app.set(db);

const index = require("./routes/index-old");
const upload = require("./routes/upload");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/api", index);
app.use("/upload", upload);

app.get('/*', (req, res) => {
  // res.setHeader(
  //   'Content-Security-Policy-Report-Only',
  //   "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  // );
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// app.get("*", (req, res) => {
//   res.sendFile("/server/build/index.html", { root: global });
// });

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

module.exports = app;
