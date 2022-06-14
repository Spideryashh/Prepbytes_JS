// Q1 => largest no. in an array
// Method 1
const findMax = [22,2,345,312,546,678];
const findMaxInArray = (findMax) =>{
    let maximumElement = findMax[0];
    for(let i=1;i<findMax.length;i++){
        if(findMax[i]>maximumElement){
            maximumElement = findMax[i];
        }
    }
        return maximumElement ;

}
console.log(findMaxInArray(findMax),'Maximum using function')

//Method 02 
console.log(Math.max(...findMax),"maximum using library")

// Q2 =>.square of an array
//Method 1 

// input - const array = [1,2,3,4]
// output - const array = [1,4,9,16]

//steps : squareArray = [];
//         array[0] = 1;
//         squareArray[0] = array[0]*array[0] = 1
//         squareArray[0] = array[0]*array[0] = 1
//         squareArray[0] = array[0]*array[0] = 1
//  return squareArray

// steps 
    // step01 Create a function squareOfNumber
    // step02 declare a squareArray = []
    // step03 start iteration on array (Array whose elements Square we want )till the length
    // step04 set your logic to these squareArray[i]  = array[i]*array[i];
    // step05 finally reutrn squareArray
    // step06 call squareOFNumber on any array whose elements square we want 

const squareOfArray = (array)=>{
    let squareOfArray = [];
    for(let i=0;i<array.length;i++){
        squareOfArray[i]= array[i]*array[i];
    }
    return squareOfArray ;
}
const findSq = [2,3,4,5];

console.log(squareOfArray(findSq));

// Method 2 
const square = findSq.map((item)=>{
    return item*item;
})
console.log(square, "square using library(map)")

// Q-4 => create a function which returns no.s divisible by 5
console.log(20%3);   //2 => % tells the remainder

// Steps :
// Step 1 = create function with argument
// Step 2 = iterate loop over array
// Step 3 = array[i] % 5 == 0
// Step 4 = call that function and print that 
// const ps = require('prompt-sync')
// const input = ps()

// const array = input("Enter Array Elements").split(',')
// const digit = input("Enter Digit")
// console.log(array,'Array')
// console.log(digit,'Digit')


const numberDivisibleByGivenValue = (array,digit)=>{
    let returnArray = []
    let count = 0;
    for(let i = 0 ; i < array.length; i++){
        if(array[i]%digit==0){
            returnArray[count++] = array[i];
        }
    }
    return returnArray;
}
const array = [1,25,3,4,5];
const digit = 5;
console.log(numberDivisibleByGivenValue(array,digit))

//Q5
class Rectangle {
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
}
const rec = new Rectangle(2,3)
console.log(rec)

//method 2 
let user = {
    name:"Yash",
    bio:function(){
        console.log(user.name);
    }
}
user.bio()

//

