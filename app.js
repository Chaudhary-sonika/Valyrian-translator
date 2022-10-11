var btnInterpret = document.querySelector("#interpret-btn");
var inputPlace = document.querySelector("#input-place");
var outputDiv = document.querySelector("#text-output");
var errorDiv = document.querySelector("#error-div");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getApiURL(input) {
    return serverURL +"?"+"text="+ input
}
function errorHandler(error) {
    console.log("error occured: ", error);
    alert("Something wrong with the server! try again after some time")
}
function clickHandler() { 
    if(inputPlace.value !=" ") {
        errorDiv.style.display = "none";
        var inputText = inputPlace.value;
        fetch (getApiURL(inputText))
       .then(response => response.json())
       .then(json => {
         var interpretedText = json.contents.translated;
         outputDiv.innerText = interpretedText;
     })
     .catch(errorHandler)
    } else {
        errorDiv.innerText = "Please enter sentence or a word";
    }
   
};
btnInterpret.addEventListener("click", clickHandler)