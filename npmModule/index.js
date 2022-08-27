const chalk = require('chalk');
const validator=require('validator');


console.log(chalk.blue.italic('Hello world!')); 

const res=validator.isEmail("yashvarshney@yash.com");
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));