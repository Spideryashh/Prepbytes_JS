let arr1 = [2,19,34,72,11,64,55,98];

//1.largest no. in an array
let bigNo = arr1.reduce(function (pl, cl) {
    return (cl > pl) ? cl: pl;
})
console.log(bigNo);

// 2.square of an array
let sqarr = arr1.map(v => v*v);
console.log(sqarr);

//3. numbers divisible by 5 
let div5 = arr1.filter(v => v%5==0);
console.log(div5);

//4.object with 5 key value pairs
var Student = {
    name : "Yash Varshney",
    rollNo : "193057",
    college : "SAITM",
    course : "Btech CSE",
    subject : "web development"
}
console.log("Student Data is ", Student);