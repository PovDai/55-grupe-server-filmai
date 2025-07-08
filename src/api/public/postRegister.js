import { connection } from "../../db.js";
import { hash } from "../../lib/hash.js";
import { IsValid } from "../../lib/IsValid.js";
import { randomString } from "../../lib/randomString.js";
/*Eksportuojama asinchroninė funkcija postRegister, apdorojanti registracijos (POST) užklausas. Priima:

req (užklausos objektas),

res (atsakymo objektas).*/
export async function postRegister(req, res) {
    const [err, msg] = IsValid.fields(req.body, { //
        username: 'username',
        email: 'email',
        password: 'password',
        tos: 'tos',
    });
    /*Tikrinami užklausos kūno (req.body) laukai:

username turi atitikti vartotojo vardo reikalavimus,

email turi būti tinkamas el. pašto adresas,

password turi atitikti slaptažodžio reikalavimus,

tos (Terms of Service) turi būti sutikimas su taisyklėmis.

javascript
*/

    if (err) {
        return res.json({
            status: 'error',
            msg: msg, //Jei validacija nepavyko (err yra true), grąžinamas klaidos atsakas su pranešimu.
        });
    }

    const { username, email, password } = req.body; //Iš req.body išskiriami username, email ir password kintamieji.

    try {
        const sql = `SELECT * FROM users WHERE username = ? OR email = ?;`;
        const [response] = await connection.execute(sql, [username, email]);
//Vykdoma SQL užklausa, ieškanti vartotojo pagal username arba email (naudojamas parametrizuotas užklausa apsaugai nuo SQL injekcijų).
        if (response.length > 0) {
            return res.status(400).json({
                status: 'error', //Jei vartotojas su tokiu vardu ar el. paštu jau egzistuoja (response.length > 0), grąžinamas 400 klaidos atsakas.
                msg: 'Toks vartotojas jau uzregistruotas',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ //Jei įvyksta klaida vykdant užklausą, išvedama į konsolę ir grąžinama 500 klaida.
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    const salt = randomString(10);
    const passwordHash = hash(password + salt); //Sugeneruojama 10 simbolių ilgio "druska" (salt) slaptažodžio maišai.

    try {
        const sql = `INSERT INTO users (username, email, salt, password_hash) VALUES (?, ?, ?, ?);`;
        const [response] = await connection.execute(sql, [username, email, salt, passwordHash]);

        /*Vykdoma SQL užklausa, įterpianti naują vartotoją į users lentelę su:

username,

email,

salt,

password_hash.*/

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            }); //Jei įrašytas ne vienas įrašas (affectedRows !== 1), grąžinama 500 klaida.
        }
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(500).json({
                status: 'error',
                msg: 'kartojasi irasas...',
            });
        } //Jei įvyksta dublikato klaida (ER_DUP_ENTRY), grąžinamas specialus pranešimas.

        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida', //Jei įvyksta kita klaida, išvedama į konsolę ir grąžinama 500 klaida.
        });
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Sekminga registracija',
    });

    /*Trumpai:
Ši funkcija:

Tikrina registracijos duomenis (username, email, password, tos).

Patikrina, ar vartotojas su tokiu vardu ar el. paštu jau egzistuoja.

Generuoja "druską" ir maišo slaptažodį.

Įrašo naują vartotoją į duomenų bazę.

Grąžina sėkmės arba klaidos pranešimą.*/
}