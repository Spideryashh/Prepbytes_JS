// dom lecture 3

// inner html : text between html tags 

// Event Listner : 

//note : svg images use vector algo instead of pixels so it doesn't get blurred when zoomed in and out.


var Search = document.querySelector('[title="Search for products, brands and more"]')

document.querySelector('[class="L0Z3Pu"]').addEventListener('mouseover',()=>{

    console.log("hover event")
})

document.querySelector('[class="L0Z3Pu"]').addEventListener('click',()=>{
    var input = Search.value;

    console.log("search clicked")
})

// top offers to my offers

// 1. get top offers
var ele1 = document.querySelector('[class="xtXmba"]')
ele1.innerHTML = "Dhamaka Deals"
// 2. change innerHtml
document.querySelector('[class="xtXmba"]').innerHTML

function printConsole(){
    console.log("i m console")
}

function handleSearchClick(event) {
    console.log("searched 1 ");
    console.log("searched 2 ");
}

// click = mouseDown +  mouseUp

// Interview Ques :  ES5 and ES6 difference 



// DEC 24

// =>reduce 

// callback func that pass func as an argument
arr.reduce(function(tv,cv,ci){
    console.log
})

