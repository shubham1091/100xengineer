const http = require("http");
const fs = require("fs");
const url = require("url");

const logRequest = (log) => {
  fs.appendFile("./request.log", log, (err) => {
    if (err) {
      console.error("Error writing to log file", err);
    }
  });
};

const handleRequest = (req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204);
    return res.end();
  }

  const log = `${Date.now()}: ${req.method} ${req.url} New req Received\n`;
  logRequest(log);

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  res.setHeader("Content-Type", "text/plain");

  switch (myUrl.pathname) {
    case "/":
      res.end("HOME");
      break;
    case "/about":
      const username = myUrl.query.username || "Guest";
      res.end(`HI, ${username}`);
      break;
    case "/search":
      const search = myUrl.query.search_query || "nothing";
      res.end(`Here are your search results for ${search}`);
      break;
    case "/signup":
      if (req.method === "GET") {
        res.end("This is a signup form");
      } else if (req.method === "POST") {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          // Here you would process the signup data
          res.end("Signup successful");
        });
      } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
      }
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      break;
  }
};

const myServer = http.createServer(handleRequest);

myServer.listen(8000, () => {
  console.log("Server started on port 8000");
});
