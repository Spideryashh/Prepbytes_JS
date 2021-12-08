console.log("hello js"); //print output
var a = 5;              //declare variable
console.log(a);
test()
function test(){
    console.log("from function ",a);
}

var month = "mar"
switch(month){
    case "jan" : console.log("January");
                break;
    case "feb" : console.log("feburary");
                break;
    case "mar" : console.log("March");
                break;
    default  : console.log("random")
}

for (let i = 1; i<=5 ; i++){
    console.log(i);
}

var arr = [2,4,6,8]
for(var i in arr){
    console.log("array",i,arr[i])
}
var name1 = ["webdev", "DSA", "colg Subjects"]
for(var i of name1){
    console.log("array",i)
}
var star =1;
var space = 2;
for(let i=space;i>=0;i--){
    for(let j=star;j<=5;j+=2){
        console.log(i,j);
    }
}

add(3,2);
function add(a,b){
    var c = a+b;
    console.log("add is ",c)
}