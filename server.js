var express = require('express');
var app = express();

app.use(express.Router());
app.use(express.static(__dirname +'/public', { maxAge: 86400000 }));
app.use(express.Router());

// redirect ventures

app.get('/docs/ventures', function(req, res) {
  res.redirect('https://docs.google.com/spreadsheets/d/1HKQUpWWYf4FuuV7vSkiXahCUtW8TvWWa3jdk-0m2Rhs/edit?usp=sharing');
});

// redirect members

app.get('/docs/members', function(req, res) {
  res.redirect('https://docs.google.com/spreadsheet/ccc?key=0Al8ZtGHhkmyQdGV2N2V2bW9ueVR5T2VfWXlfak9pUUE&usp=sharing');
});

// redirect resources

app.get('/docs/resources', function(req, res) {
  res.redirect('https://docs.google.com/a/terpmail.umd.edu/spreadsheets/d/1lFM5vy8iIljtcseX-Q4nQn89HF6vAI9vcF6Ky9VcFqU/edit?usp=sharing');
});

// redirect talks

app.get('/talk', function(req, res) {
  res.redirect('https://docs.google.com/forms/d/1ItpxO38vplZ1nvvy02exZZFWdZUi6Cryeik7GTNP-sM/viewform');
});
app.get('/talks', function(req, res) {
  res.redirect('https://docs.google.com/forms/d/1ItpxO38vplZ1nvvy02exZZFWdZUi6Cryeik7GTNP-sM/viewform');
});

// redirect calendar

app.get('/calendar', function(req, res) {
  res.redirect('http://startupshell.org/calendar.html');
});

// redirect apply

app.get('/apply', function(req, res) {
  res.redirect('https://docs.google.com/forms/d/14qk71AGmVgy7VXs1x9sUbM3NptFhC9US8ei3FqwTUaU/viewform');
});

// redirect open house

app.get('/openhouse', function(req, res) {
  res.redirect('https://www.facebook.com/events/1407933469506082/');
});

// redirect map

app.get('/map', function(req, res) {
  res.redirect('http://ter.ps/shellmap');
});

// redirect demo day

// app.get('/demoday', function(req, res) {
//   res.redirect('http://startupshell.org/demoday.html');
// });

// redirect launch umd

app.get('/launch', function(req, res) {
  res.redirect('https://www.launch.umd.edu/startupshell');
});

app.get('/launch/video', function(req, res) {
  res.redirect('https://www.youtube.com/watch?v=mJu1YzJqdZQ');
});

// wildcard redirect

app.get('/*', function(req, res) {
  res.redirect('/');
});


app.listen(8000);
