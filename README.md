# Client side SSL certificate authentication in Node.js

Includes 

 - `server.js`: Example HTTPS Node.js server that validates the client cert
 - `express-server.js`: Example [express](http://expressjs.com/) version
 - `client.sh`: A bash script that demonstrates using `curl` as a client
 - `client.js`: A Node.js client example
 - `ssl`: Directory with a bunch of sample certs

More coming soon.  Wanted to recreate the work I did to demonstrate [client cert auth in nginx](blog.nategood.com/client-side-certificate-authentication-in-ngi).  You can check it out for more info about the client side certs process.

Notes

 - The passphrase on these keys are all "password"
 - All examples run on port 5678 for the sake of simplicity (port 443 works just as well assuming you have access)