const fs = require('fs');

const requestHandler =     (req, res) => {
    const url = req.url;

    switch (url) {

        case '/': {

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Assignment 1</title></head>');
            res.write(
                '<body><form action="/createUsers" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
            );
            res.write('</html>');
            
            return res.end();

        }

        case '/users': {

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Assignment 1</title></head>');
            res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
            res.write('</html>');
            return res.end();
        }

        case '/createUsers': {
            const body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
            });

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();

        }

    }


}


module.exports = {

    handler:requestHandler
    
}