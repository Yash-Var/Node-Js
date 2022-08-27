const os =require('os');

console.log(os.arch());

const freememory=os.freemem();

console.log(`${freememory/1024/1024/1024}`);

const freememo=os.totalmem();

console.log(`${freememo/1024/1024/1024}`);
 
console.log(os.hostname());

console.log(os.platform());

console.log(os.type());