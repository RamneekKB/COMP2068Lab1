'use strict';
//Require the http module so we can send requests
var http = require('http');
//Create our webserver that listens on port of 3000 of localhost / 127.0.01
http.createServer(function (req, res) {
    //Tell our server, hey we are ok and good to go, expect some text!
    res.writeHead(200, {
    //    'Content=Type'; 'text/plain'
    });
    //End request with some text
    res.end('Hello New World');
    //Listen on port 3000
}).listen(3000);
console.log('Server listening on port 3000');