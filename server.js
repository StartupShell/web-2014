var express = require('express');
var app = express();

app.use(express.Router())
app.use(express.static(__dirname +'/public', { maxAge: 86400000 }));

app.listen(8000);