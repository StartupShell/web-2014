var express = require('express');
var router = express.Router();
var startups = require('./../startups');
var members = require('./../members');
var _ = require('lodash');
module.exports = router;

// Home page
router.get('/', function(req, res) {
	res.render('index',  {images: _.shuffle(startups.startups)});
});


// Apply Page
router.get('/apply', function(req, res) {
  res.render('apply');
})

// Apply
router.post('/apply', function(req, res) {
  res.send('You applied. Good work');
})

// Members
router.get('/members', function(req, res) {
  res.render('members',  {people: _.shuffle(members.members)});
})

// redirect
router.get('/talk', function(req, res) {
	res.redirect('https://docs.google.com/forms/d/1ItpxO38vplZ1nvvy02exZZFWdZUi6Cryeik7GTNP-sM/viewform');
})
