'use strict';

var app = require('./index');
var http = require('http');
var bodyParser = require('body-parser');


var server;

/*
 * Create and start HTTP server.
 */

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
