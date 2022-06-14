// dec 28

function add(a,b,...c){ // ...c => assigns all the left arguments in array form
    
    let sum= a+b;
    let sum2 = 0;
    c.forEach((ele)=>{
        sum2 = sum2 + ele;
    })
    console.log(sum + sum2);
}
add(2,5,3,4,5,6,7)

let a = [1,2,3];
let b = [2,3];

let ans = a.concat(b)
console.log(ans);

// shallow copy, deep copy ,  memory referencing ... 


//dec 29
// Rest vs Spread

let c = [...a,...b,13,14];

b.push(12);
console.log("c is ",c,b);

// includes
let y =[1,2,3];
console.log(y.includes(5))