// v8 engine : used by nodeJS and chrome to execute JS

// Q. why JS is not a strongly typed language?

// => V8 engine architecture
// full codegen : convert into simple machine lvl code
// Crankshaft : start optimizing the code (JIT just in time compilation) 
//              inlining , hidden class
// Garbage collection : it saves space ...

console.log("Start");

setTimeout(function a(){
    console.log("Callback")
},3000)

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate<startDate+10000){
    endDate = new Date().getTime();
}
console.log("While expires");

// async code executes after sync code 

