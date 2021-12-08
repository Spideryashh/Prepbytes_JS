let variableA = "hello";
var variableB = "world";
const variableC = "Program";

run();

variableA = "namaste";
variableB = "India";
// variableC = "script";    error const variable value cannot be changed(TypeError: Assignment to constant variable)
run();

// let let1 = "a";
// let let1 = "b";
// console.log(let1);
// let1 cannot be initialize twice(SyntaxError: Identifier 'let1' has already been declared)


function run (){
console.log(variableA);
console.log(variableB);
console.log(variableC);
}

console.log(a);
let a = 15;
