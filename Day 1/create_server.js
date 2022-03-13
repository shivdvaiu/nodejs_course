const http = require('http');
server = http.createServer(function (req, res) {
 
    console.log(req.headers,req.url,req.method);

    res.write('<h1>Hello i am from node server</h1>');
     
});

server.listen(3000)