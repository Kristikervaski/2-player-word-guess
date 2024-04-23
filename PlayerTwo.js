/* 
Author: Kristi Kervaski
Date: April 19, 2024
 */

//set variables for secret word
let secretWord = localStorage.getItem("secretWord")
// let word = secretWord[Math.floor(Math.random() * secretWord.length)];
let word = secretWord;
let totalGuesses = localStorage.getItem("numberGuesses");
let numberGuesses = totalGuesses;

const playerOne = localStorage.getItem("playerOne");
//arrays
const guessedLettersWrong = [];
const guessedLettersRight = [];
let gameDisplay = [];
let gameStarted = false;
// greeting of user and give parameters of play
function startGame() {
    const userName = document.getElementById("userName").value;
    if (userName.length == 0) {
        alert("You must enter your name.")
        return;
    }

    const greeting = document.getElementById("greeting");
    const playerGreeting = (`Hello ${userName},  ${playerOne}  has given you  ${numberGuesses}  tries to guess the word.`);
    document.getElementById("greeting").innerHTML = playerGreeting;
    // set info to local storage
    localStorage.setItem("playerTwo", userName);
    gameStarted = true;
    gamePlay();

}

//function to start game get secret word and print number of spaces for secret word
function gamePlay() {
    //print blanks equal to letter count in word ---only prints first space!!
    for (let i = 0; i < word.length; i++) {
        gameDisplay.push("_");

    }
    document.getElementById("word").textContent = gameDisplay;
}
let playerGuess = document.getElementById("guess");
playerGuess.addEventListener("click", guessLetter);
//guessLetter function 
function guessLetter() {
    const userName = document.getElementById("userName").value;
    if (!gameStarted) {
        alert("You must enter your name and press start.")
        return;
    }
    let playerInput = document.getElementById("playerInput");
    //maximum tries counter
    numberGuesses--;//counts number of tries
    document.getElementById("countRemaining").innerHTML = numberGuesses;
    if (numberGuesses <= 0) {
        alert("You are out turns! Try a new game.")
        window.location.href = "endGame.html?" + "Attempts=" + (totalGuesses - numberGuesses) + "&outcome=lost";
    }
    //Checks null 
    if (!playerInput.value) {
        alert("You must input a letter");
        return;
    }
    //converts player input to lower case
    let inputLetter = playerInput.value.toLowerCase();

    //Check already guessed letters 
    if (guessedLettersWrong.includes(inputLetter) || guessedLettersRight.includes(inputLetter)) {
        alert("That letter has already been guessed");
        return;
    }
    //set playerInput box back to blank for next input 
    playerInput.value = "";

    //if player input does not match 
    if (!word.includes(inputLetter)) {
        alert("Not that letter!")
        //add incorrect guess to wrong letter array
        guessedLettersWrong.push(inputLetter);
        document.getElementById("letters").innerHTML = guessedLettersWrong;
        return;
    }
    //if playerInput matches any letter replace blank with correct letter
    for (let guess = 0; guess < word.length; guess++) {
        if (word[guess] == inputLetter) {
            gameDisplay[guess] = word[guess];
            if (!guessedLettersRight.includes(inputLetter)) {
                guessedLettersRight.push(inputLetter);
                document.getElementById("rletters").innerHTML = guessedLettersRight;
            }
        }
        document.getElementById("word").textContent = gameDisplay;
        if (guess == word.length - 1) {
            //check if all letters of word are guessed
            console.log(gameDisplay.join("").replace("_", ""));
            // if(gameDisplay.join("").replace("_","").length == word.length){
            if (gameDisplay.join("").replace("_", "") == word) {
                alert('YOU DID IT! You guessed it correctly!');
                setTimeout(() => {
                    window.location.href = "endGame.html?" + "Attempts=" + (totalGuesses - numberGuesses) + "&outcome=won";
                }, 500);
            }
        }
    }
    // document.getElementById("word").textContent = gameDisplay;
    // //check if all letters of word are guessed
    // console.log(gameDisplay.join("").replace("_", ""));
    // // if(gameDisplay.join("").replace("_","").length == word.length){
    // if (gameDisplay.join("").replace("_", "") == word) {
    //     alert('YOU DID IT! You guessed it correctly!');

    //     window.location.href = "endGame.html?" + "Attempts=" + (totalGuesses - numberGuesses) + "&outcome=won";
    // }
}

