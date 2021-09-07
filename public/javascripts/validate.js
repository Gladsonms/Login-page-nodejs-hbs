const form = document.querySelector("form");
const username = document.querySelector("input[type=text]");
const password = document.querySelector("input[type=password]");
form.addEventListener("submit",onsubmitFunction)
 function onsubmitFunction(e){
     if(username.value === " " || password.value === " " )
     {
         e.preventDeafault();
         alert("fill")
         return false;
     }
 }