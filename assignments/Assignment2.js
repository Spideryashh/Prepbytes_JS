// Q1 => Reverse an array 
reverse = (arr)=>{
    let reverseArrayToReturn = []
    for(let i=arr.length-1;i>=0;i--){ 
        reverseArrayToReturn[i] =  arr[arr.length-1-i] 
    }
    return reverseArrayToReturn;
}
let inputArray = [1,2,3,44,55]
let inputArray2 = [22,33,0,1]
console.log(reverse(inputArray));
console.log(reverse(inputArray2));

//output : [ 55, 44, 3, 2, 1 ]
//         [ 1, 0, 33, 22 ]

//----------------------------------------------------------

//Q2 => Reverse the string
reverseString =(str)=>{
    let reverseStrToReturn = ''
    for(let i=str.length-1;i>=0;i--){
        reverseStrToReturn+=str.charAt(i);
    }
    return reverseStrToReturn;
}

let str = "students";
let str2 = "userdata";
console.log(reverseString(str));
console.log(reverseString(str2));

// output : stneduts
//          atadresu

//-----------------------------------------------------------------