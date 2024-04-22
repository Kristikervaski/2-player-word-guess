/*Kristi Kervaski
LaFinal Project
April 22, 2024
*/

function getCookie() {
    let secretValue;
    let cookies = document.cookie;
    let secretCookies = cookies.split(";");
    for (let i = 0; i < secretCookies.length; i++) {
        const element = secretCookies[i];
        let cookieKey = element.split("=")[0];
        if (cookieKey == "secretWord"){
            secretValue = element.split("=")[1];
        }   
        if (cookieKey =="numberGuesses"){
            secretValue = element.split("=")[1];
        }     
    }
}
//print query string onto confirmation page
function getQueryString(){
    const queryString = new URLSearchParams(window.location.search).toString();
    
    let keyValuePairs = queryString.split("&");
    
    let infoDivs = document.querySelectorAll(".inputs");

    infoDivs.forEach((element, index) => {
        element.textContent = keyValuePairs[index].split("=")[1];
    });
    
}
getQueryString();