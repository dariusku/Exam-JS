/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
let output = document.getElementById('output');

function getData() {

    fetch(ENDPOINT).then (function(res){
        return res.json()
    }).then(function (data){
        data.forEach(el=>{
            let card = document.createElement('div');
            card.classList.add('cardstyle');
            let brands = document.createElement('div');
            brands.innerHTML = `${el.brand}`
            brands.classList.add('brandstyle');
            let models = document.createElement('div');
            models.innerHTML = `${el.models}` 
            card.appendChild(brands);
            card.appendChild(models);
            output.appendChild(card);
            

        })
       
        
    })
}

getData();
