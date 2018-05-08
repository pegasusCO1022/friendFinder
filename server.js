// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;


// var friendsArray = require("./app/data/friends.js")

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// Import data files from seperate JS
// var friendsArray = require('./friends.js');
// Basic route that sends the user first to the AJAX Page
// Displays all survey results 

// listening and letting us know the server is up and running 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});