var express = require("express");
var app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cars", (request, response) => {
    // hard-coded user data
    var cars_array =
    [
        {name: "car1.jpg"},
        {name: "car2.jpg"},
        {name: "car3.jpg"}
    ];
    response.render('cars', {cars: cars_array});
})

app.get("/cats", (request, response) => {
    // hard-coded user data
    var cats_array = ['cat1.jpg','cat2.jpg'];
    response.render('cats', {cats: cats_array});
})

app.get("/new", (request, response) => {
    response.render('form');
})

app.listen(8000, () => {
  console.log("listening on port 8000");
});