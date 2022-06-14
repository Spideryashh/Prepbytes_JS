// closures 
function name() {
    var a = 12;
    function child(params){
        console.log("var is ",a)
    }
    child();
}

name();

// //------------------shortcut key for stopping output at terminal => ctrl+C
// // Timeout
// console.log("1");
// console.log("2");

// setTimeout(()=>{
//     console.log("3");
// },2000)

// setTimeout(()=>{
//     console.log("4");
// },1000)

// Interval
// setInterval(()=>{
//     console.log("repeat")
// },1000);

// var interval  = setInterval(()=>{
//     console.log("4");
//     clearInterval(interval);
// },3000)

// Synchronous and Asynchronous = [ *Js is synchrounous and single threaded]
console.log("1");
console.log("2");
setTimeout(()=>{
    console.log("5")
},0);
console.log("3");
console.log("4");
// the line by line execution of code , next line doesn't run if the previous line is not executed


// Single thread vs multiple thread



