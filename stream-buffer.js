const http = require("http");
const fs = require("fs");

// creating a sever using row node.js
const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET");

  // streaming file reading
  const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt");

  readableStream.on("data", buffer => {
    res.statusCode = 200;
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.statusCode = 200;
    res.end("The streaming is over! ");
  });

  readableStream.on("error", err => {
    console.log(err);
    res.statusCode = 500;
    res.end("Something went wrong! ");
  });
});

server.listen(5000, () => {
  console.log(`server is listening on port: 5000`);
});
