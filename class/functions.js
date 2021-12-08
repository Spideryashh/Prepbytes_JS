function multiply(count,price) {
    var total = count * price;
    return total;

}

var total = multiply(10,12);
console.log("cart price is ", total);

function callKrde (number){
    var call = number ; 
    return call;
}
var call = callKrde(9821677749);
console.log("connected to ",call);

// arrow function

//1.regular
console.log("output is ",mul10(4));
function mul10(a){
    return a*10;   
}

//2.arrow
var aa = (a)=>{
    return a*10;
}
console.log(aa);

//3.function expression
function check(){
    var a = "hello"
    console.log(a);
}
// console.log(a);

if(2==2){
    var block = 5;
}
console.log("value of block",block);