var express = require('express');
var app = express();

app.use(express.Router())
app.use(express.static(__dirname +'/public', { maxAge: 86400000 }));
app.use(express.Router())


// redirect ventures

app.get('/docs/ventures', function(req, res) {
  res.redirect('https://docs.google.com/spreadsheets/d/1HKQUpWWYf4FuuV7vSkiXahCUtW8TvWWa3jdk-0m2Rhs/edit?usp=sharing');
});

// redirect members

app.get('/docs/members', function(req, res) {
  res.redirect('https://docs.google.com/spreadsheet/ccc?key=0Al8ZtGHhkmyQdGV2N2V2bW9ueVR5T2VfWXlfak9pUUE&usp=sharing');
});

// redirect talks

app.get('/talk', function(req, res) {
  res.redirect('https://docs.google.com/forms/d/1ItpxO38vplZ1nvvy02exZZFWdZUi6Cryeik7GTNP-sM/viewform');
});

// redirect apply

app.get('/apply', function(req, res) {
  res.redirect('https://docs.google.com/forms/d/14qk71AGmVgy7VXs1x9sUbM3NptFhC9US8ei3FqwTUaU/viewform');
});

app.get('/*', function(req, res) {
  res.redirect('/');
})


app.listen(8000);