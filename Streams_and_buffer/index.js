
const fs =require("fs");
const http=require("http");

const server =http.createServer();

server.on('request',(req,res)=>{
   
    // fs.readFile('input.txt','utf-8',(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
     
    const restream=fs.createReadStream('input.txt');
    // restream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // restream.on("end",()=>{
    //     res.end();
    // });
    restream.pipe(res);

});

server.listen(6500, "127.0.0.1");