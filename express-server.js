/**
 * Express version of server.js
 */

var express = require('express');
var fs = require('fs');

var options = {
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt'),
    ca: fs.readFileSync('ssl/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
};

var app = express.createServer(options);

app.get('/', function(req, res) {
    req.client.authorized ? 
        res.json({"status":"approved"}) : 
        res.json({"status":"denied"}, 401);
});

app.listen(5678);