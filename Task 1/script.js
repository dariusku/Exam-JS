/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


let form = document.querySelector('form').addEventListener('submit', function(e){
     e.preventDefault();
    let userInput =  document.querySelector("#user-input").value;
    let toLb = userInput * 2.2046;
    let toG = userInput / 0.001;
    let toOz = userInput * 35.274;
   
    function getConverted(){
       let output = document.getElementById('output')
       output.innerHTML=`Įvesti kilogramai konvertuoti į svarus${toLb} lb,<br>Įvesti kilogramai konvertuoti į gramus ${toG} g,<br>Įvesti kilogramai konvertuoti į uncijas ${toOz} oz.`
    }
    getConverted();
})

     



