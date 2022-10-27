const http = require('http');

function rqlistener(req, res) {
    console.log('Abhishek');
}

const server = http.createServer(rqlistener);
server.listen(3000);