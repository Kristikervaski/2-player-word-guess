//arrays and delcared variables

let guessedLettersWrong=[];
let guessedLettersRight=[];
let word = secretWord[Math.floor(Math.random() * secretWord.length)];

//function to start game and print number of spaces for secret word

function gamePlay(){
    let gameDisplay = [];
    //print blanks equal to letter count in randomly selected word 
    for (let display = 0; display < word.length; display++) {
        gameDisplay.push("_"); 
    }
    document.getElementById("secretWord").textContent = gameDisplay;
}

//guessLetter function 
function guessLetter(){
    let numberGuesses = document.getElementById("numberGuesses").value;
    let playerInput = document.getElementById("playerInput");
		//maximum tries counter
        numberGuesses ++ ;//counts number of tries
        document.getElementById("countRemaining").innerHTML = numberGuesses;
        if (numberGuesses > 15){
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
			//add incorrect gues to wrong letter array
            guessedLettersWrong.push(inputLetter);
		    document.getElementById("letters").innerHTML = guessedLettersWrong; 
			return;
		}
		//if playerInput matches any letter in gameWord then replace blank with correct letter
        for (let guess = 0; guess < word.length; guess++){	
            if (word[guess] == inputLetter){
                gameDisplay[guess] = word[guess];
			    if (!guessedLettersRight.includes(inputLetter)){
				    guessedLettersRight.push(inputLetter);
				    document.getElementById("rletters").innerHTML = guessedLettersRight; 
			    }
            } 
        }
        document.getElementById("secretWord").textContent = gameDisplay;
        //check if all letters of word are guessed
        if(gameDisplay.join("").replace("_","").length == word.length){
            alert('YOU DID IT! You guessed it correctly!');
        }
}