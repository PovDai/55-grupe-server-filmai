"use strict";

var formDOM = document.forms[0];
var usernameDOM = document.getElementById('username');
var emailDOM = document.getElementById('email'); //Gaunamas HTML elementas su ID "email" (el. pašto įvesties laukas) ir priskiriamas kintamajam emailDOM.

var passwordDOM = document.getElementById('password'); //Gaunamas HTML elementas su ID "password" (slaptažodžio įvesties laukas) ir priskiriamas kintamajam passwordDOM.

var tosDOM = document.getElementById('tos'); //Gaunamas HTML elementas su ID "tos" (Terms of Service - taisyklių sutikimo checkbox'as) ir priskiriamas kintamajam tosDOM.

if (formDOM) {
  //Tikrinama, ar formos elementas egzistuoja (kintamasis formDOM turėjo būti apibrėžtas anksčiau).
  formDOM.addEventListener('submit', function (e) {
    //Prie formos pridedamas event listener, kuris klausosi "submit" įvykio (kai vartotojas pateikia formą).
    e.preventDefault(); //Sustabdomas numatytasis formos pateikimo veiksmas (kad naršyklė nesikrautų iš naujo).

    /*Sukuriamas objektas data, kuriame surenkamos visos formos reikšmės:
    username - vartotojo vardas
    email - el. pašto adresas
    password - slaptažodis
    tos - taisyklių sutikimo reikšmė*/

    var data = {
      username: usernameDOM.value,
      email: emailDOM.value,
      password: passwordDOM.value,
      tos: tosDOM.value
    };
    fetch('/api/register', {
      //Siunčiama HTTP užklausa į serverio "/api/register" maršrutą.
      method: 'POST',
      headers: {
        //Nustatomas užklausos header'is, nurodantis, kad siunčiami duomenys yra JSON formatu.
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) //Konvertuojamas data objektas į JSON eilutę ir siunčiamas kaip užklausos turinys.

    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      //Gauti duomenys iš serverio atsakymo išvedami į konsolę.
      console.log(data);
    })["catch"](console.error);
  });
}
/*Trumpai:
Šis kodas:

Suranda visus reikalingus formos laukus

Užkloja formos pateikimo veiksmą

Surinktus registracijos duomenis siunčia į serverį kaip JSON

Apdoroja serverio atsakymą

Išveda rezultatus arba klaidas į konsolę

Tai yra tipiškas registracijos formos apdorojimo pavyzdys, kuris:

Rinktų vartotojo duomenis

Siųstų juos į serverį

Gautų atsakymą

Atvaizduotų rezultatą

Pastaba: Kodas daro prielaidą, kad formDOM ir usernameDOM kintamieji jau yra apibrėžti anksčiau (nors šiame kodo fragmente jų apibrėžimo nematome).*/