//Input 

//const ps = require('prompt-sync')
const ps = require('prompt-sync')
const input = ps()

let userName = input("Enter your Name").split(" ");
// console.log("username is ",userName);
const reinput = require('prompt-sync')
let Number = reinput("enter your number");
console.log(`Number is ${Number}`)