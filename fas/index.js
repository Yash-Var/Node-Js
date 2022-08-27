const fs=require('fs');

// fs.writeFile('read.txt',"today is awesome day",(err)=>{
//     console.log("file is created");
//     console.log(err);
// });

// fs.appendFile("read.txt"," yash varshney ",(err)=>{
//     console.log(err);
// });

const data=fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
});
// console.log(data);