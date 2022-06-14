var myJSON = '{ "a" : 1 , "b" : 2}';

// parse : it converts json string in object form 
let obj = JSON.parse(myJSON);
console.log(obj)

let string1 = JSON.stringify(myJSON);
console.log(string1);

var date = Date.now();
var date2 = new Date();
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(String(date2.getTime()));
