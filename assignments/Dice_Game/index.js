let images = [
    "img/dice1.png",
    "img/dice2.png",
    "img/dice3.png",
    "img/dice4.png",
    "img/dice5.png",
    "img/dice6.png"
]

let dice = document.querySelector("#image1");
let button = document.querySelector("#DiceButton")

function Roll(){
    dice.classList.add("shake");   

    setTimeout(()=>{
        dice.classList.remove("shake");

        let dieValue = Math.floor(Math.random()*6) // Math.random 0 - 1 => *6 = 0.6 - 6  , floor => convert .values to number 0.6 = 1  
        dice.setAttribute("src",images[dieValue])
    },1000)
    
}

