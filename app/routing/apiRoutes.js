// Displays friends array list 
var friends = require("../data/friends.js")

module.exports = function (app){


app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    
    let userScores = req.body;

    friends.push(userScores);

    res.json(userScores);

    var userScoresArr = req.body.scores;

    var bestMatch = {
        name: "",
        photo: "",
        scores: Infinity
    }
    var scoresArray = [];


    for(var i = 0; i < friends.length; i++){
          var scoresDiff = 0;
        for(var j = 0; j < userScoresArr.length; j++){
            scoresDiff += (Math.abs(parseInt(friends[i].scores[j] - parseInt(userScoresArr[j]))));
        }
        scoresArray.push(scoresDiff);
    }

    for(var i=0; i<scoresArray.length; i++){
        if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
        }
    }

    var bestFriend = friends[bestMatch];
    res.json(bestFriend);

   
});

}