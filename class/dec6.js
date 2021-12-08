// array map function 
const array1 = [1, 2, 3, 4];
const map1 = array1.map(x => x * x);
console.log(map1);

// sq of a no using for loop
var input = [1,20,48,2,4,6,5];

console.log("length of arr is ", input.length)
for(let i=0;i<input.length;i++){
    input[i]=input[i]*input[i];
}
console.log(input);

// for each loop => doesn;t return anything , reads the value
input.forEach((num1 , index)=>{
    return input[index] = num1*num1;
    // console.log("array values are",num , index)
})
console.log("array values are ",input)

// map => map creates a new array from calling a function for every array element 
var input2 =  [1,20,48,2,4,6,5];
input2.map(num=>{
    return num * num ;
}
)
console.log("array values are ", input2);

// arr.filter => filter the required condition values
//Q:print even values of array 
var arr1 = [1,20,48,2,4,6,5];
var output = arr1.filter(ele=>{
    return ele%2===0;
})
console.log(output);

function isOdd(params){
    if(params%2 !== 0){
        return true;
    }
    return false
}


// map & Maps
const map8 = new Map();
map8.set('name','SAITM');
map8.set('age',20);
map8.set('year',2021);
map8.delete('age');

console.log("value of name ",map8.get('name'));
console.log("value of age ",map8.get('age'));

