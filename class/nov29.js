// first order : if the variable is assigned with a function then it is called first order.
// higher order : if their is function inside function then it is called higher order function.
// callback : the function which is passed as an argument is called callback function.



// function add(a,b){
//     return a+b;
// }
// var ans = add(5,10);
// console.log(ans);



// =>Higher Order Function [function is called inside function then it is called higher order function.]

function myHigherOrderFunction(){
    console.log("console 1");
    return function(){
        console.log("console 2");
    }
}



var output = myHigherOrderFunction();
output();

// eg for taking function as argument in HOF (callback)
var call = function(){
    console.log("this is call function")
}

var high = function(a){
    a();
}
high(call);