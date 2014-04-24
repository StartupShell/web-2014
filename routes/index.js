var express = require('express');
var router = express.Router();
var fs = require('fs');
var startups = require('./../startups');
var _ = require('lodash');
var request = require('request');
module.exports = router;



// Home page
router.get('/', function(req, res) {
var id = '7qvrobfs0js5799ebugodgc5go%40group.calendar.google.com';
var results = 4;
var url = 'http://www.google.com/calendar/feeds/'+
		id+'/public/full?alt=json&orderby=starttime&max-results='+
		results+'&singleevents=true&sortorder=ascending&futureevents=true';




	request(url,function(err, res, body) {
		
	})
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
