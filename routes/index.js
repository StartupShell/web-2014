var express = require('express');
var router = express.Router();
module.exports = router;



// Home page
router.get('/', function(req, res) {
  res.render('index');
});


// Apply
router.get('/apply', function(req, res) {
  res.render('apply');
})

router.post('/apply', function(req, res) {
  res.send('You applied. Good work');
})
