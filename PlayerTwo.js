/* 
Author: Kristi Kervaski
Date: April 19, 2024
 */

//set variables for secret word
let secretWord = localStorage.getItem("secretWord")
let word = secretWord[Math.floor(Math.random() * secretWord.length)];
let numberGuesses = localStorage.getItem("numberGuesses");

//arrays
const guessedLettersWrong=[];
const guessedLettersRight=[];
let gameDisplay = [];

// greeting of user and give parameters of play
function startGame(){
    const userName = document.getElementById("userName").value;
    const greeting=document.getElementById("greeting");
    const playerOne = localStorage.getItem("playerOne");
    const playerGreeting = (`Hello ${userName},  ${playerOne}  has given you  ${numberGuesses}  tries to guess the word.`);
    document.getElementById("greeting").innerHTML = playerGreeting;
    gamePlay();
}

//function to start game get secret word and print number of spaces for secret word
function gamePlay(){
    //print blanks equal to letter count in word ---only prints first space!!
    for (let i = 0; i < word.length; i++) {
        gameDisplay.push("_"); 
        //console.log(word);
    }
    document.getElementById("Word").textContent = gameDisplay;
}
let playerGuess = document.getElementById("guess");
playerGuess.addEventListener("click", guessLetter);
//guessLetter function 
function guessLetter(){
    let playerInput = document.getElementById("playerInput");
		//maximum tries counter
        numberGuesses -- ;//counts number of tries
        document.getElementById("countRemaining").innerHTML = numberGuesses;
        if (numberGuesses <= 0){
            alert("You are out turns! Try a new game.")
        }
        //Checks null 
        if (!playerInput.value) {
            alert("You must input a letter");
            return;
        }
        //converts player input to lower case
        let inputLetter = playerInput.value.toLowerCase(); 
        
        //Check already guessed letters 
        if (guessedLettersWrong.includes(inputLetter) || guessedLettersRight.includes(inputLetter)){
            alert("That letter has already been guessed");
            return;
        }
        //set playerInput box back to blank for next input 
        playerInput.value = "";
        
        //if player input does not match 
        if(!word.includes(inputLetter)){
			alert("Not that letter!")
			//add incorrect guess to wrong letter array
            guessedLettersWrong.push(inputLetter);
		    document.getElementById("letters").innerHTML = guessedLettersWrong; 
			return;
		}
		//if playerInput matches any letter replace blank with correct letter--does not reach this loop
        for (let guess = 0; guess < word.length; guess++){	
            if (word[guess] == inputLetter){
                gameDisplay[guess] = word[guess];
			    if (!guessedLettersRight.includes(inputLetter)){
				    guessedLettersRight.push(inputLetter);
				    document.getElementById("rletters").innerHTML = guessedLettersRight; 
			    }
            } 
        }
        document.getElementById("word").textContent = gameDisplay;
        //check if all letters of word are guessed
        if(gameDisplay.join("").replace("_","").length == word.length){
            alert('YOU DID IT! You guessed it correctly!');
        }
        window.location.href= "endGame.html?";
}

// set info to local storage
localStorage.setItem("userName", userName);