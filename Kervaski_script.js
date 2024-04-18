/* 
Author: Kristi Kervaski
Date: April 16, 2024
 */



//load game
let button= document.getElementById("startGame");
button.addEventListener("click",loadGameVariables);
// Greet player one
function loadGameVariables(){
let playerOne= document.getElementById("nameOne").value;
let secretWord=document.getElementById("secretWord");
let button=document.getElementById("numberGuesses").value;
let greeting=document.getElementById("greeting");
greeting.innerHTML="Fantastic word choice, " + playerOne + " You have given " + numberGuesses.value + " guesses.";
window.open("playerTwo.html")
gamePlay();
}

