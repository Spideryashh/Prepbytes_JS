// // IAFE : IMMEADIATELY Invoked function

(function () {
    console.log("this is demo function");
}) ()

// //--------------------------
function call(param){
    console.log("aa");
}

function high (a,b){
    a();
    console.log(b);
}

high(call,"random")
//---------------------------
// =>String Comparison

// characters are compared one by one (length doesn't matter)
var string1 = 'a'; // a =97
var string2 = 'ab'; //  A = 65

if(string1>string2){
    console.log("a greater than b")
}else if(string2>string1){
    console.log("b greater than a");
}else {
    console.log("error");
}
// //values are compared using ASCII

//--------------------------------------
var name = "You will be an amazing developer";
let index = name.indexOf("developer");
// let lastIndex = name.lastIndexOf("developer");
console.log("index is ",index);
// console.log("index is ",lastIndex);

// string concatenation
var a = "qq";
var b = "aa";

c = a+b;
console.log("c is ",c);

//slicing

var dev  = name.slice(-13,-7); // it will print from index 7 to 9 , 10 is not included
console.log("sliced string is ",dev)