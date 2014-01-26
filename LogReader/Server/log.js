var file = require('./fileio');
var express = require('express');

var app = express();

//app.configure(function() {
//    //app.use(express.logger('dev'));
//    //app.use(express.bodyParser());
//});

app.get('/log', file.getLogs);

app.listen(1100);
console.log('listening port 1100');