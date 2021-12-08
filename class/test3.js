// FIRST ORDER FUNCTION
// a programming language is said to have first-class functions when functions in that language are treated like any other variable.
// eg: in such a language, a function can be passed as an argument to other functions,
// can be returned by another function and can be assigned as a value to a variable.

const foo = function(){
    console.log("foobar");
}
foo(); // invoke
//------------------------------------------
// CALLBACK FUNCTION
// function which is passed as an argument in other function is called callback function
// eg: returnHello and arrow are callback func in below example 

function returnHello(){
    return "Hello, ";
}
function greeting2(msg ,msg2, name){
    console.log(msg() + msg2() + name);
}
var arrow = ()=>{
    return "Arrow func is passed"
}

greeting2(returnHello ,arrow , " Javascript");
//----------------------------------------------------------
// HIGHER ORDER FUNCTION

function sayHI(){
    var a = "name";

    return function(){
        console.log("Hello!")
    }
}
sayHI()()

//------------------------
const sayHello = function(){
    return function() {
        console.log("Hello!")
    }
}

const myFunc = sayHellocode();
console.log("my func", myFunc)
myFunc();