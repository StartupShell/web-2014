var express = require('express');
var router = express.Router();
var fs = require('fs');
var startups = require('./../startups');
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
