/**
 * Example server.  Returns JSON indicating whether or not
 * the client provided an approved/signed certificate.
 */

var https = require('https');
var fs = require('fs');

var options = {
    // The Server's SSL Key
    key: fs.readFileSync('ssl/server.key'),
    // The Server's Cert
    cert: fs.readFileSync('ssl/server.crt'),
    // The CA (us in this case)
    ca: fs.readFileSync('ssl/ca.crt'),
    // Ask for the client's cert
    requestCert: true,
    // Don't automatically reject
    rejectUnauthorized: false
};

https.createServer(options, function (req, res) {
    if (req.client.authorized) {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end('{"status":"approved"}');
        // console.log(req.client);
        console.log("Approved Client ", req.client.socket.remoteAddress);
    } else {
        res.writeHead(401, {"Content-Type":"application/json"});
        res.end('{"status":"denied"}');
        // console.log(req.client);
        console.log("Denied Client " , req.client.socket.remoteAddress);
    }
}).listen(5678);