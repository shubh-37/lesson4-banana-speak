var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");
var outputDiv = document .querySelector("#output-txt");
var url = "https://api.funtranslations.com/translate/minion.json";

function translatedUrl(text){
    return url + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Oops :( error occured " + error);
    alert("Something is wrong with the server right now!! Please try again in sometime.");
}

function clickHandler(){
    //taking input
    var inputText = inputTxt.value;
    //processing the input 
    

    fetch(translatedUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedVal = json.contents.translated;
        outputDiv.innerHTML = translatedVal
    })
    .catch(errorHandler)
     
}

btnTranslate.addEventListener("click", clickHandler);