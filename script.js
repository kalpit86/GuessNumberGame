'use strict';

// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = "20";
// document.querySelector(".score").textContent = '1';
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value)
//localStorage.clear();
document.querySelector(".check").addEventListener("click",outputValue);
let currentHigh = localStorage.getItem("highScore");
document.querySelector(".highscore").textContent = currentHigh;
const correctNumber =  Math.floor(Math.random() * 20)+1;
let score = 5;
let guess;
function outputValue(){
 guess =  Number(document.querySelector(".guess").value);

if(guess === correctNumber){
    document.querySelector(".message").textContent = "Correct Number🥳🎉";
    document.querySelector(".number").textContent = guess;
    if(score>currentHigh){
        localStorage.setItem("highScore",score); 
    }
    document.body.style.backgroundColor = "#228B22";
    document.querySelector(".check").removeEventListener("click",outputValue);
}
else if(guess!= correctNumber && guess<correctNumber){
    document.querySelector(".message").textContent = "Too Low📉"; 
    document.querySelector(".number").textContent = "?";
    score = score - 1;
    document.querySelector(".score").textContent = score;
}
else if(guess!= correctNumber && guess>correctNumber ){
    document.querySelector(".message").textContent = "Too High📈"; 
    document.querySelector(".number").textContent = "?";
    score = score -1;
    document.querySelector(".score").textContent = score;
}
if(score === 0){
    document.querySelector(".message").innerHTML = "You Lost 😞😞</br> Please try again.. "; 
    document.querySelector(".check").removeEventListener("click",outputValue);
}
}

document.querySelector(".again").addEventListener("click",tryAgain);

function tryAgain(){
    location.reload();
}


