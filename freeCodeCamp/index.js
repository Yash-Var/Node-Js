const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.end('hello world');
    }
    else
    if(req.url==='/about'){
// BLocking Code
        for(let i=0;i<100;i++){
            for(let j=0;j<100;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('about page')
    }
    else
    res.end('error')
});

server.listen(5050, () => {
  console.log("server is running");
});
