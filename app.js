const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, "/images")));
app.use(express.static("images"));

// sendFile will go here
app.get("/users/index", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/photos/index/1/", function (req, res) {
  res.sendFile(path.join(__dirname, "/1.html"));
});
app.get("/photos/index/2", function (req, res) {
  res.sendFile(path.join(__dirname, "/2.html"));
});
app.get("/photos/index/3", function (req, res) {
  res.sendFile(path.join(__dirname, "/3.html"));
});
app.get("/photos/index/4", function (req, res) {
  res.sendFile(path.join(__dirname, "/4.html"));
});
app.get("/photos/index/5", function (req, res) {
  res.sendFile(path.join(__dirname, "/5.html"));
});
app.get("/photos/index/6", function (req, res) {
  res.sendFile(path.join(__dirname, "/6.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
