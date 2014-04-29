var express = require('express');
var router = express.Router();
var fs = require('fs');
var startups = require('./../startups');
var members = require('./../members');
var _ = require('lodash');
var request = require('request');
module.exports = router;



// Home page
router.get('/', function(req, res) {

	res.render('index',  {images: _.shuffle(startups.startups) });

});


// Apply
router.get('/apply', function(req, res) {
  res.render('apply');
})

router.post('/apply', function(req, res) {
  res.send('You applied. Good work');
})


router.get('/test', function(req, res){
  res.send('hh is a test')
})

// redirect
router.get('/talk', function(req, res) {
	res.redirect('https://docs.google.com/forms/d/1ItpxO38vplZ1nvvy02exZZFWdZUi6Cryeik7GTNP-sM/viewform');
})

router.get('/members', function(req, res) {
  res.render('members',  {people: _.shuffle(members.members) });
})