import mysql from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './env.js';
/*Importuojama mysql2/promise biblioteka, kuri leidžia dirbti su MySQL duomenų baze naudojant pažadus (promises) vietoje callback'ų. Tai palengvina asinchroninį kodą.*/
/*Importuojami duomenų bazės prisijungimo parametrai iš env.js failo:

DB_HOST - duomenų bazės serverio adresas

DB_PORT - prievadas, per kurį jungiamasi

DB_DATABASE - duomenų bazės pavadinimas

DB_USER - duomenų bazės vartotojo vardas

DB_PASSWORD - duomenų bazės slaptažodis*/
export const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    
});
/*Eksportuojamas (kad galėtų būti naudojamas kituose failuose) connection kintamasis, kuris bus duomenų bazės ryšio objektas.

await naudojamas, nes createConnection grąžina pažadą (promise).*/

/*Trumpai:
Šis kodas:

Importuoja reikalingas bibliotekas ir nustatymus

Sukuria ir eksportuoja duomenų bazės ryšio objektą

Nurodo visus reikalingus prisijungimo parametrus:

Kur yra duomenų bazė (host ir port)

Prie kurios DB jungiamasi (database pavadinimas)

Kokiais prisijungimo duomenimis (user ir password)

Šis ryšio objektas vėliau gali būti naudojamas kitose programos dalyse atlikti užklausoms į duomenų bazę.*/
