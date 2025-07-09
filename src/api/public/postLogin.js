import { connection } from "../../db.js"; //Importuojamas duomenų bazės ryšys (connection) iš failo ../../db.js, skirtas vykdyti SQL užklausas.
import { COOKIE_MAX_AGE } from "../../env.js"; //Importuojama konstanta COOKIE_MAX_AGE iš aplinkos kintamųjų failo (env.js), nurodanti sausainėlio galiojimo laiką sekundėmis.
import { hash } from "../../lib/hash.js"; //Importuojama hash funkcija, skirta slaptažodžių maišai (hash'inimui).
import { IsValid } from "../../lib/IsValid.js"; //Importuojama IsValid klasė/objektas, skirtas įvesties duomenų validacijai.
import { randomString } from "../../lib/randomString.js";

/*Eksportuojama asinchroninė funkcija postLogin, apdorojanti prisijungimo (POST) užklausas. Priima:

req (užklausos objektas),

res (atsakymo objektas).*/
export async function postLogin(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        usernameOrEmail: 'nonEmptyString',
        password: 'password',
    });
    /*Tikrinami užklausos kūno (req.body) laukai:

usernameOrEmail turi būti netuščias tekstas,

password turi atitikti slaptažodžio reikalavimus.

Rezultatas grąžinamas kaip masyvas [err, msg], kur:

err – ar yra klaida,

msg – klaidos pranešimas (jei yra).*/

    if (err) {
        return res.json({
            status: 'error',//Jei validacija nepavyko (err yra true), grąžinamas klaidos atsakas su pranešimu
            msg: msg,
        });
    }

    const { usernameOrEmail, password } = req.body; //Iš req.body išskiriami usernameOrEmail ir password kintamieji.
    let userObj = null; //Inicializuojamas userObj kintamasis, kuris saugos vartotojo duomenis iš duomenų bazės.

    try {
        const sql = `SELECT * FROM users WHERE username = ? OR email = ?;`;
        const [response] = await connection.execute(sql, [usernameOrEmail, usernameOrEmail]); //Vykdoma SQL užklausa, ieškanti vartotojo pagal username arba email (naudojamas parametrizuotas užklausa apsaugai nuo SQL injekcijų).

        if (response.length === 0) {
            return res.status(400).json({ //Jei vartotojas nerastas (response.length === 0), grąžinamas 400 klaidos atsakas.
                status: 'error',
                msg: 'Username/email ir password pora yra neteisinga',
            });
        }

        if (response.length > 1) {
            return res.status(500).json({ //Jei rasta daugiau nei vienas vartotojas (tai neturėtų nutikti), grąžinama 500 klaida.
                status: 'error',
                msg: 'Serverio klaida',
            });
        }

        userObj = response[0]; //Išsaugomas pirmas (ir vienintelis) rastas vartotojas userObj kintamajame.
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida', //Jei įvyksta klaida vykdant užklausą, išvedama į konsolę ir grąžinama 500 klaida.
        });
    }

    const hashedPassword = hash(password + userObj.salt); //Slaptažodis maišomas su vartotojo "druska" (salt), kad būtų gautas hashedPassword.

    if (hashedPassword !== userObj.password_hash) {
        return res.status(400).json({
            status: 'error', //Jei apskaičiuotas hashedPassword nesutampa su saugomu password_hash, grąžinamas 400 klaidos atsakas.
            msg: 'Username/email ir password pora yra neteisinga',
        });
    }

    const loginTokenString = randomString(); //Sugeneruojamas atsitiktinis prisijungimo token'as (loginTokenString).s

    try {
        const sql = `INSERT INTO login_tokens (user_id, token) VALUES (?, ?);`;
        const [response] = await connection.execute(sql, [userObj.id, loginTokenString]); //Įrašomas naujas token'as į login_tokens lentelę, susiejant jį su vartotojo id.
/*res.status(500) - Nustato HTTP atsakymo statuso kodą:

500 reiškia "Internal Server Error" (vidinė serverio klaida)

Tai informuoja klientą (naršyklę, aplikaciją), kad įvyko nežinoma serverio klaida

.json({...}) - Siunčia atsakymą JSON formatu:

Įprastai objektas būtų pateiktas riestiniuose skliaustuose {}

Šiuo atveju objektas nepateiktas (tai greičiausiai kodo fragmentas)

Pilnas pavyzdys dažniausiai atrodo taip:*/
        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error', //Jei įrašytas ne vienas įrašas (affectedRows !== 1), grąžinama 500 klaida.
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        console.log(error); //Jei įvyksta klaida įrašant token'ą, išvedama į konsolę ir grąžinama 500 klaida.
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }
    /*Sukuriamas sausainėlio parametrų masyvas:

loginToken su reikšme loginTokenString,

domain – lokalaus serverio,

max-age – nurodytas iš COOKIE_MAX_AGE,

HttpOnly, Secure, SameSite=Lax – saugumo nustatymai.*/

    const cookieParams = [
        `loginToken=${loginTokenString}`,
        'domain=localhost',
        'max-age='+ COOKIE_MAX_AGE,
        'HttpOnly',
        'path=/',
        'Secure',
        'SameSite=Lax',
    ];

    return res
        .set({ 'Set-Cookie': cookieParams.join('; ') })
        .json({
            status: 'success', //Nustatomas Set-Cookie antraštė su suformatuotais parametrais ir grąžinamas sėkmingas atsakas.
            msg: 'Tu buvai sekmingai prijungtas prie sistemos',
            action: 'redirect',
            href:'/admin',

        });
}

/*Trumpai:
Ši funkcija:

Tikrina prisijungimo duomenis (usernameOrEmail, password).

Ieško vartotojo duomenų bazėje.

Patikrina slaptažodžio hash'ą.

Sukuria ir išsaugo naują prisijungimo token'ą.

Nustato saugų sausainėlį (cookie) su token'u.

Grąžina sėkmės arba klaidos pranešimą.*/