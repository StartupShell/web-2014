var express = require('express');
var app = express();

app.use(express.Router())
app.use(express.static(__dirname +'/public', { maxAge: 86400000 }));
app.use(express.Router())


app.get('/docs/ventures', function(req, res) {
  res.redirect('https://docs.google.com/spreadsheets/d/1HKQUpWWYf4FuuV7vSkiXahCUtW8TvWWa3jdk-0m2Rhs/edit?usp=sharing');
});


app.listen(8000);