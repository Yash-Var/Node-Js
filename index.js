 const fs= require("fs");

 fs.writeFileSync("readme.txt","my name is yash varshney");

fs.appendFileSync("readme.txt"," today i study node js core modules");


//to rename the file name 

fs.renameSync("readme.txt","yash.txt");