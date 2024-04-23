/*Kristi Kervaski
LaFinal Project
April 22, 2024
*/
const playerOne = localStorage.getItem("playerOne");
let totalGuesses = localStorage.getItem("numberGuesses");
const playerTwo =  localStorage.getItem("playerTwo");
let secretWord = localStorage.getItem("secretWord")
let results = document.getElementById("results");

//print query string onto confirmation page

const queryString = new URLSearchParams(window.location.search).toString();
let keyValuePairs = queryString.split("&");
console.log(keyValuePairs);
let attempts = keyValuePairs[0].split("=")[1];
let outcome = keyValuePairs[1].split("=")[1];
if(outcome == "won"){
    results.textContent = `Good job ${playerTwo} you guessed ${secretWord} with ${attempts} attempts!`
} else{
    results.textContent = `Sorry ${playerTwo}, ${playerOne} chose ${secretWord}.`
}
// results.textContent = `Good job ${playerTwo} you guessed ${secretWord} with ${attempts} attempts!`


    // infoDivs.forEach((element, index) => {
    //     element.textContent = keyValuePairs[index].split("=")[1];
    // });
    

