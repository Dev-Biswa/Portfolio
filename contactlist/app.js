// importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
var route = require("./routes/route");
const severless = require("serverless-http");

// port number
const port = 3000;

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/contactlist");

// on connection
mongoose.connection.on("connected", () => {
  console.log("connected to database mongodb @ 27017");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("error in database connection : " + err);
  }
});

// adding middleware - cors
app.use(cors());

// body - parser
app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/.netlify/functions/api", route);

// testing server
app.get("/", (req, res) => {
  res.send("foobar");
});

app.listen(port, () => {
  console.log("server started at port " + port);
});

module.exports = app;
module.exports.handler = serverless(app);
