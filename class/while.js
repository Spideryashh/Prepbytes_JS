var j = 1;
while(j<10){
    console.log("value of j is : ",j)
    j++;
}

var k=10;
while(k>=1){
    console.log("value of k : ",k)
    k--;
}

var d = 5;
// while(d<0){
//     console.log("dd");
// }
do {
    console.log("initial condition");
    d--
}while(d<0)

var counter = 10;
console.log("old counter ",counter);
for(let i=0;i<10;i++){
    if(i==3){
        continue
    }
    counter = counter + 1;
    console.log("i is : ",i)
}
console.log("updated counter ",counter)