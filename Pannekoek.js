var aantalPannekoeken= document.querySelector("#InvoerP");
var hoeveelheidBloem= document.querySelector("#grBloem");
var hoeveelheidEieren= document.querySelector("#eieren");
var hoeveelheidMelk= document.querySelector("#mlMelk");
var hoeveelheidBoter= document.querySelector("#grBoter");

/*
Recept: 200gr bloem, 2 eieren, 500ml melk en 50gr boter voor 10 pannekoeken.
1 pakkekoek = 20gr bloem, 0.2 eieren, 50ml melk en 5gr boter.
*/

aantalPannekoeken.addEventListener('change', updateValue);

function updateValue(e) {
  hoeveelheidBloem.textContent = e.target.value*20;
  hoeveelheidEieren.textContent = e.target.value*0.2;
  hoeveelheidMelk.textContent = e.target.value*50;
  hoeveelheidBoter.textContent = e.target.value*5;
};