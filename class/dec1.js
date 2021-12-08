
var name = "You will be an amazing developer";

//Strings =>replace
var a = name.replace('developer','student');
console.log("name is ", a)

// =>replace all
// var test = "you are as you are"
// console.log(name.replaceAll('you','we'));

// =>split
var result = name.split(' ');
console.log("result is ",result);
// function replace( initial , final){
// }

// =>length
console.log("length is ",name.length);

// for(let i=0; i<name.length;i++){
// }

// => array
var price = [1,2,3,4,5];
price.push(10);

console.log("arr1 price ",price)
var price2 = new Array("ele1","ele2");
price2.pop();
console.log("arr2 price",price2);

// =>array join (returns array as a string)
var joinedArray = price.join('&');
console.log("joined array is ",joinedArray)

// continued ... 2 dec
// =>array slice (doesn't change the orignal array )
console.log("sliced arr is ", price.slice(1));

var a = [1,2,3,4,5];
var c= a.slice(1,3) // doesn't include last index
console.log("slice ",c,a)

// =>array splice (made changes in original array, returns the deleted elememnts)
var a = [1,2,3,4,5];
var c= a.splice(1,3)// last index is included
console.log("splice ",c,a)

mobile = [6,7,8,9,10]
var fourgb = mobile.splice(0,5,11,12,13,14) // (index , no of elements to be deleted ,to be inserted elements)
console.log("after splice is ",mobile)

// =>reverse
mobile.reverse();
console.log("reverse an array",mobile)

// =>sort (// )
var input = [1,2,4,6,5,7,3,8];
input.sort()
console.log("input is ",input);

var chars = ['b','g','r','a']
chars.sort();
console.log("sorted data ",chars);

// it take all no as strings  in sort function
var aa = [8,9,20,4,5,3,1];

// using arrow function below sort code => aa.sort((a,b)=>a-b)
aa.sort(
    function(a,b){
        return a-b;
    }
)


console.log("sorted array is ", aa)

var chars = ['Gg','g'];
console.log("sorted data ",chars.sort())

var nos = [1,2,3,4,5];
nos[((n)=>n*n)]
console.log(nos);

const array1 = [1, 2, 3, 4];
const map1 = array1.map(x => x * x);
console.log(map1);

