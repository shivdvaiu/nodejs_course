const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const pathName = req.url;

  if (pathName === "/user&info") {
    res.end(
      JSON.stringify({
        name: "shiv pratap singh",
      })
    );
  }

  switch (pathName) {
    case "/overview":
      res.end("This is overview");

      break;
 
    case "/product":
      res.end("This is product");

      break;

    case "/bro":
      res.end("This is Anshul");
      break;

    default:
      res.writeHead(404, {
        "Content-type": "text/html",
        "my-owner-header": "hello world",
      });
      res.end("<h1>Page Not Found</h1>");
      break;
  }
});


server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server... ");
});
