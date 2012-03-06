/**
 * Node Client to test the Server
 */

var https = require('https');
var fs = require('fs');

var options = {
    host: 'localhost',
    port: 5678,
    method: 'GET',
    path: '/',
    key: fs.readFileSync('ssl/client.key'),
    cert: fs.readFileSync('ssl/client.crt'),
    headers: {}
};

var req = https.request(options, function(res) {
    console.log(res);
});
req.end();