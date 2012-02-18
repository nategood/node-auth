/**
 * Client side authentication in Node.js
 */

// curl -k https://localhost:8000/
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('ssl/server.key'),
    // passphrase: "password",
    cert: fs.readFileSync('ssl/server.crt'),
    ca: fs.readFileSync('ssl/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
};

https.createServer(options, function (req, res) {
    console.log(" === " + req.client.authorized + " === ");
    
    if (req.client.authorized) {
        res.writeHead(200);
        res.end("APPROVED!");
    } else {
        res.writeHead(401);
        res.end("DENIED!");
    }
}).listen(7890);