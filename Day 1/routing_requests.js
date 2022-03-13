const http = require("http");
const fs = require("fs");
server = http.createServer(function (req, res) {
    const url = req.url;

    if (url === "/") {
        res.write(
            '<body><form action="/message" method="POST"> <input type ="text" name = "message"><button type = "submit">Send</button></form> </body>'
        );

        return res.end();
    }

    if (url === "/message" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);


        });



        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync("message.txt", message);
        });

        
        res.write("<h1>File is written</h1>");

        res.statusCode = 302;

        return res.end();
    }
});

server.listen(3000);