/* 
Author: Kristi Kervaski
Date: April 18, 2024
 */



//load game
let button= document.getElementById("startGame");
button.addEventListener("click",loadGameVariables);

function loadGameVariables(){
    //set variables of player inputs
    let form=document.getElementById("form");
    let playerOne= document.getElementById("nameOne").value;
    let secretWord=document.getElementById("secretWord").value;
    let numberGuesses=document.getElementById("numberGuesses").value;
    //put name, word and number of guesses in local storage
    localStorage.setItem("playerOne", playerOne);
    localStorage.setItem("numberGuesses", numberGuesses);
    localStorage.setItem("secretWord", secretWord);
    
    

    window.location.href= "playerTwo.html?";
}





