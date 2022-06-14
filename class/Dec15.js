//Q reverse the arr

// input : [12,13,45,67]
// output : [67,45,13,12]

// // dry run
// let arr = [12,13,45,67]
// console.log("Given Array :");
// for(let i=0;i<arr.length;i++){  
//     console.log(arr[i]);
// }
// console.log("Reversed Array :")
// for(let i=arr.length-1;i>=0;i--){ // initialize = arr.length-1 = arr[3]
//     console.log(arr[i]);
// }

// steps : 
// create a function and call that function
// inside that function declare and empty array
// start iteration by for loop
// sotre value of array in empty declare array
// finally return the array that was declared

reverse = (arr)=>{
    let reverseArrayToReturn = []
    for(let i=arr.length-1;i>=0;i--){ // initialize = arr.length-1 = arr[3]
        reverseArrayToReturn[i] =  arr[arr.length-1-i] 
            // reverseArrayToReturn [3] = arr[3] //67 on 3rd index
            // reverseArrayToReturn [2] = arr[2] // 45 on 2nd index....
    }
    return reverseArrayToReturn;
}
let inputArray = [1,2,3,44,55]
let inputArray2 = [22,33,0,1]
console.log(reverse(inputArray));
console.log(reverse(inputArray2));
//-----------------------------------------------
// Q=> Reverse Strings
// input: "student"
// output : "tneduts"

// let str = "abcde";
// console.log(str.charAt(0));
// console.log(str.charAt(1));

// str += 'z'
// let str = '';
// str += charAt(i);

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
