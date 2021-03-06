//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    console.log(req.body);
});

app.listen(3000, function() {
    console.log("Server working on Port: 3000");
});