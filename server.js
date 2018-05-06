// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Import data files from seperate JS
// var friendsArray = require('./friends.js');
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
// Displays all survey results 
app.get("/api/friends", function (req, res) {
    return res.json(friendsArray);
});

// listening and letting us know the server is up and running 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});