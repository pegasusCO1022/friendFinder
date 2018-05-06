// Displays friends array list 
app.get("/api/friends", function (req, res) {
    return res.json(friendsArray);
});
app.post("/api/friends", function (req, res) {
    
    let surveyResults = req.body;

    console.log(surveyResults);

    surveyResults.push(friendsArray);

    res.json(friendsArray);
});