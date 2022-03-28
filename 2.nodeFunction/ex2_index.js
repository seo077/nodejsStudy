const value = require('./ex2_var');
const checkNumber = require('./ex2_func');

function checkStringOddEven(str){
    if(str.length % 2){
        return value.odd;
    }else{
        return value.even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddEven('hello'));