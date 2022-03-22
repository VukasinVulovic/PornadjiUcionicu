const Path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const router = express();

const CERT_PATH = 'C:\\Certbot\\live\\test111.mywire.org\\';

router.use('/', express.static('./build'));

const httpServer = http.createServer((req, res) => { //redirect to https
    res.writeHead(301, { 'Location': `https://${req.headers['host']}${req.url}` });
    res.end();
});

const httpsServer = https.createServer({
    cert: fs.readFileSync(Path.join(CERT_PATH, 'cert.pem')),
    key: fs.readFileSync(Path.join(CERT_PATH, 'privkey.pem')),
    ca: fs.readFileSync(Path.join(CERT_PATH, 'privkey.pem'))
}, router);

httpServer.listen(80, () => console.log('HTTP TO HTTPS redirect server is running.'));
httpsServer.listen(443, () => console.log('HTTPS Server is running.'));
