import { connection } from "../db.js"; // Importuojama connection (duomenų bazės ryšys) iš failo ../db.js. Tai naudojama SQL užklausoms vykdyti.

export async function userData(req, res, next) {//Eksportuojama asinchroninė funkcija userData, kuri veikia kaip middleware (tarpinė funkcija). Ji priima:
    req.user = { //req (užklausos objektas),res (atsakymo objektas),next (funkcija, kuri perduoda kontrolę kitam middleware'ui).


        isLoggedIn: false, //Inicializuojamas req.user objektas su numatyta reikšme isLoggedIn: false. Tai reiškia, kad pagal nutylėjimą vartotojas nėra prisijungęs.
    };

    if (!req.cookies.loginToken || req.cookies.loginToken.length !== 20) {
        return next(); //Tikrinama, ar užklausoje yra sausainėlis loginToken ir ar jo ilgis lygus 20 simbolių. Jei sausainėlio nėra arba jo ilgis neteisingas, iškviečiama next() ir funkcija baigia darbą.
    }

    try { //Pradedamas try blokas, kad sugautų galimas klaidas vykdant SQL užklausą. 
        const sql = `
            SELECT users.id, users.username, users.email,
                users.created_at AS user_created_at,
                login_tokens.created_at AS login_token_created_at
            FROM login_tokens
            INNER JOIN users
                ON login_tokens.user_id = users.id
            WHERE token = ?;`; /*Sukuriama SQL užklausa, kuri:

            Jungia lenteles login_tokens ir users pagal user_id,
            
            Renka vartotojo duomenis (id, username, email, created_at),
            
            Filtruoja rezultatus pagal token (naudojamas ? vietoj tiesioginės reikšmės, kad būtų išvengta SQL injekcijų).*/
        const [results] = await connection.execute(sql, [req.cookies.loginToken]);
        /*Vykdoma SQL užklausa su connection.execute().

req.cookies.loginToken perduodamas kaip parametras (? vietoje užklausoje).

Rezultatai išsaugomi results kintamajame (naudojamas destruktūrizavimas, nes execute grąžina masyvą).*/

        if (results.length !== 1) {
            return next(); //Jei rezultate nėra tiksliai vienas įrašas (t.y., tokenas nerastas arba yra dublikatų), iškviečiama next() ir funkcija baigia darbą.
        }
        /*Jei vartotojas rastas, req.user atnaujinamas:

...results[0] išplečia rastus duomenis (pvz., id, username),

isLoggedIn nustatomas į true.*/

        req.user = {    
            ...results[0],
            isLoggedIn: true,
        };
    } catch (error) { //Jei įvyksta klaida vykdant SQL užklausą, ji išvedama į konsolę, bet programa nenutrūksta.
        console.log(error);
    }

    return next();
}
/*Ši middleware funkcija:

Tikrina, ar vartotojas turi galiojantį loginToken sausainėlį.

Jei taip, iš duomenų bazės ieško vartotojo, susieto su šiuo tokenu.

Jei vartotojas randamas, req.user užpildomas jo duomenimis ir isLoggedIn: true.

Jei tokenas neteisingas arba vartotojas nerastas, req.user lieka isLoggedIn: false.

Visada iškviečia next(), kad užklausa būtų perduota toliau.*/