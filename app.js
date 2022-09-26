var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");

function clickHandler(){
    var translatedVal = inputTxt.value;
    console.log(translatedVal); 
}

btnTranslate.addEventListener("click", clickHandler);