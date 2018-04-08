var express = require("express");
var request = require("request");

var omdbApiKey = "d3908155";

var app = express();

// Public directory :
app.use(express.static("public"));

// Use ejs directly (if we write this line, we dont need to say each time blabla.ejs)
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

// GET REQUEST :
app.get("/results", function(req, res){
    request(`http://omdbapi.com/?apikey=${omdbApiKey}&s=${req.query.searchValue}`, function (error, response, body) {
        if(!error && response.statusCode == 200) {
            res.render("results", {res: JSON.parse(body)});
        }
    })
});

// Listen Port 3030
app.listen(3030, function () {
    console.log("Movie app server is started!!");
});