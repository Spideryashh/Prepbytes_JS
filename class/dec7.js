// sets 
const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
set1.add(5);
set1.add(6);

const obj1 = {
    a:1,
    b:2
}
set1.add(obj1)

set1.add({ a:1,b:2})

console.log("set values are ",set1);

// objects => 

var arr1 = [12,43,42,12];

var Mobile = {
    name : "Apple12",
    price: "Rs. 78000",
    unit: "Xs",
    discount: "20%",
    review : ["user1 review ","user2 review"],
    subcat : {
        a: "first"
    }
}
console.log("object data is ", Mobile);
console.log("object data is ", Mobile.price);
console.log("object data is ", Mobile.name);
console.log("object data is ", Mobile.subcat);

// console.log("keys of obj are ", Object.keys(Mobile))
// console.log("values of Objects ", Object.values(Mobile))

