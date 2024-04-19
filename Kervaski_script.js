/* 
Author: Kristi Kervaski
Date: April 16, 2024
 */



//load game
let button= document.getElementById("startGame");
button.addEventListener("click",loadGameVariables);
// Greet player one
function loadGameVariables(){
    let form=document.getElementById("form");
    let playerOne= document.getElementById("nameOne").value;
    let secretWord=document.getElementById("secretWord").value;
    console.log(secretWord);
    let button=document.getElementById("numberGuesses").value;
    let greeting=document.getElementById("greeting");
    greeting.innerHTML="Fantastic word choice, " + playerOne + " You have given " + numberGuesses.value + " guesses.";
    const formData= new FormData(form);
    const queryString = new URLSearchParams(formData).toString();
    setCookie(secretWord);

    // window.location.href= "playerTwo.html?" + queryString;
//gamePlay();
}
function setCookie(secretWord){
    var date = new Date();
    var expires = "; expires=" + date.toGMTString();
    var cookieString = "secretWord" + "=" + secretWord + expires + ";path=/";
    document.cookie = cookieString;
    console.log(cookieString);
    
}
function getCookie(secretWord) {
    let word = secretWord + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
    if (c.indexOf(word) == 0) {
        return c.substring(word.length, c.length);
    }
    }
    return "";
}