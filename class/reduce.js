var num = [1,2,3,4,5];
num.reduce(function(tv,cv,ci){
    console.log(tv+" "+cv+" "+ci+" ");
    return tv+cv;
})

// class code
const reduceFunction = (prev,curr) =>{
    console.log("prev",prev," current",curr);
    return prev + curr;
}

console.log("sum is ", num.reduce(reduceFunction))

// every() => if every val is true than only it returns true
// some()  => if any of the val is true it returns true
var result = num.every(val =>{
    return val>3;
})
console.log("result",result)


var result1 = num.some(val =>{
    return val==3;
})
console.log("result1",result1)

// indexOf() =>  gives index of the given value in arr
var names = ["cat","bat","rat","bat"];
let ans = names.indexOf("bat");
console.log(ans);

console.log(names.lastIndexOf("bat"));

//include
console.log(names.includes("cat"));
// 
var count = 0;
names.forEach((a,b)=>{
    if(a == "bat"){
        count++;
    }
})
console.log(count);
// every()