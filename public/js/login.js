const formDOM = document.forms[0]; //Gaunamas pirmasis formos elementas iš dokumento ir priskiriamas kintamajam formDOM. document.forms grąžina visų formų sąrašą puslapyje.
const usernameOrEmailDOM = document.getElementById('username_or_email'); //Gaunamas HTML elementas su ID "username_or_email" (tai gali būti įvesties laukas) ir priskiriamas kintamajam usernameOrEmailDOM.
const passwordDOM = document.getElementById('password'); //Gaunamas HTML elementas su ID "password" (slaptažodžio įvesties laukas) ir priskiriamas kintamajam passwordDOM.

if (formDOM) { //Tikrinama, ar formos elementas egzistuoja (ar buvo rastas puslapyje).
    formDOM.addEventListener('submit', (e) => { //Prie formos pridedamas event listener, kuris klausosi "submit" įvykio (kai forma yra pateikiama).
        e.preventDefault(); //Sustabdomas numatytasis formos pateikimo veiksmas (kad puslapis nebūtų perkraunamas).

        const data = {
            usernameOrEmail: usernameOrEmailDOM.value,
            password: passwordDOM.value,
        };
/*Sukuriamas objektas data, kuriame saugomi formos laukų reikšmės:

usernameOrEmail - vartotojo vardo arba el. pašto reikšmė

password - slaptažodžio reikšmė*/
        fetch('/api/login', { //Siunčiama HTTP užklausa į serverio "/api/login" maršrutą.
            method: 'POST', //Nurodoma, kad tai bus POST tipo užklausa.
            headers: { //Nustatomas užklausos header'is, nurodantis, kad siunčiami duomenys yra JSON formatu.
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), //Konvertuojamas data objektas į JSON eilutę ir siunčiamas kaip užklausos turinys
        })
            .then(res => res.json())//Apdorojamas atsakymas iš serverio - konvertuojamas iš JSON formato į JavaScript objektą.
            .then(data => { //Gauti duomenys iš serverio atsakymo išvedami į konsolę.
                if (data.status === 'success' && data.action === 'redirect'){
                    location.href = data.href; /// paprasta komanda kuri is klientines puses nukreipia i norima siuo atveju /admin nuoroda.Cia imi is Postlogin json objekto
                }
            })
            .catch(console.error);
    });
}
/*Trumpai:
Šis kodas:

Suranda formą ir jos laukus

Užkloja formos pateikimo veiksmą

Surinktus duomenis siunčia į serverį kaip JSON

Apdoroja serverio atsakymą

Išveda rezultatus arba klaidas į konsolę

Tai yra tipiškas formos apdorojimo pavyzdys naudojant JavaScript Fetch API, kuris leidžia siųsti duomenis į serverį be puslapio perkrovimo.*/const formDOM = document.forms[0];
