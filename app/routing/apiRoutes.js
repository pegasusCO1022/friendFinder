// Displays friends array list 
var friendsArray = require("../data/friends.js")

module.exports = function (app){


app.get("/api/friends", function (req, res) {
    return res.json(friendsArray);
});

app.post("/api/friends", function (req, res) {
    
    let surveyResults = req.body;

    friendsArray.push(surveyResults);

    res.json(friendsArray);

    for(var i = 0; i < friendsArray.length; i++){
        var userScores = friendsArray.scores[i];
        for(var j = 0; j < userScores.length; j++){
            parseInt(userScores);
        }
    }

    console.log(userScores);

    // for(var i = 0; i < friendsArray.length; i++){
    //     console.log()
    //     }

    // }
    // loop through friends array (nested array)
    // go through each friend first array (nested array for scores)
    // math.abs absolute difference
    // new array for scores and compare scores
    // res.json new friend object

   
});

}