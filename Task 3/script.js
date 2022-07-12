/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
let results = document.getElementById('output');
let btn = document.getElementById('btn').addEventListener('click', getData)
let msg = document.getElementById('message');



function getData() {
    msg.classList.add('msg');
    fetch(ENDPOINT).then (function(res){
        return res.json()
    }).then(function (data){
        data.forEach(el=>{
            let div = document.createElement('div');
            div.textContent = `${el.login}`;
            let img = document.createElement('img');
            div.appendChild(img);
            img.setAttribute('src', el.avatar_url);
            img.style.display = 'block';
            results.appendChild(div);
           
        })
    })
}
