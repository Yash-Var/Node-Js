const fas=require("fs");
const path = require("path");

// fas.mkdir("Thapa",(err)=>{
// console.log(err);
// });

// console.log(__dirname);  
// fas.writeFile(path.join(__dirname,'\Thapa','yash.txt'),"yash varshney",(err)=>{
//     console.log(err);
// });
// fas.appendFile(path.join(__dirname,'\Thapa','yash.txt'),"  varshney",(err)=>{
//     console.log(err);
// });

// fas.readFile(path.join(__dirname,'\Thapa','yash.txt'),"utf-8",(err,data)=>{
//     console.log(data);
// });
// fas.rename(path.join(__dirname,'\Thapa','yash.txt'),path.join(__dirname,'\Thapa','varshney.txt'),(err)=>{
//     console.log(err);
// });
// fas.unlink(path.join(__dirname,'\Thapa','varshney.txt'),(ree)=>{
//     console.log(ree);
// });

fas.rmdir("thapa",(ree)=>{
    console.log(ree);
});

