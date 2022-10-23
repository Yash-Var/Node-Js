const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");
    const orgdata = JSON.parse(data);
    if (req.url == "/")
        res.end("hello from the others side thapa");
    else if (req.url == "/yash") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(data)
    }
    else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/userApi/userApi.json`, "utf-8", (err, data) => {
            // console.log(data);
            res.writeHead(200, { "content-type": "application/json" })
            res.end(orgdata[3].name)
        });
        // res.end("api done")
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 erhhuhuhror</h1>")
    }
});

server.listen(5050, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});