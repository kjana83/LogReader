var express = require('express');
var file = require('./Server/fileio');

var app = express();

//app.configure(function() {
//    //app.use(express.logger('dev'));
//    //app.use(express.bodyParser());
//});


app.configure(function() {
    app.use(express.favicon());
    app.use(express.static(__dirname));
});

app.get('/log', file.getLogs);

app.listen(1100);
