const http = require("http");

const server = http.createServer((req, res) => {

    const url = req.url;
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

    if(url==='/'){

        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body> <form action="/message" method="POST"> <input type = "text" name = "message">   <button type = "submit">Send</button>    </form>  </body>')
        res.write('</html>')
      
       return res.end();
    }


    res.write('<h1>Hello i am shiv pratap</h1>')


});

server.listen(3000);
