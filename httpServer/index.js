const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=="/")
    res.end("hello from the others side thapa");
    else if(req.url=="/yash")
    res.end("yash varshney")
    else
    {
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 erhhuhuhror</h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});