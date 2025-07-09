import dotenv from 'dotenv'; //Importuojama dotenv biblioteka, kuri skirta .env failų nustatymams įkelti į Node.js aplinką.

const argList = process.argv.slice(2); //Pašalinami pirmi du Node.js proceso argumentai (standartiiniai) ir lieka tik papildomi parametrai, kuriuos perdavė vartotojas.
const args = {}; //Sukuriamas tuščias objektas args, kuriame bus saugomi išanalizuoti argumentai.


for (const str of argList) { //Ciklas per visus likusius argumentus.
    const [key, value] = str.split('='); //Kiekvienas argumentas skaidomas pagal lygybės ženklą (=), pvz., --env=development tampa ['--env', 'development']. 

    if (key && value && key.startsWith('--')) { //Jei argumentas prasideda -- (pvz., --env), jo reikšmė įrašoma į args objektą be -- (pvz., args.env = 'development').
        args[key.slice(2)] = value; 
    }
}
/*Įkeliamas .env failas pagal nurodytą kelią (src/.env.development, jei args.env = 'development').

quiet: true reiškia, kad nerodomi įspėjimai, jei failas nerastas.*/

 dotenv.config({
     path: 'src/.env.' + args.env,
     quiet: true,
});

/*Eksportuojamas PORT kintamasis:

+ konvertuoja process.env.PORT į skaičių,

?? nurodo numatytąją reikšmę 5517, jei PORT nenustatytas aplinkos kintamuosiuose.*/


export const PORT = +process.env.PORT ?? 5517; 
export const TITLE = process.env.TITLE ?? 'Project title'; //Eksportuojamas TITLE su numatytąja reikšme 'Project title', jei nenustatyta.
export const DB_DATABASE = process.env.DB_DATABASE ?? 'test_db'; //Eksportuojamas duomenų bazės pavadinimas (DB_DATABASE) su numatytąja reikšme 'test_db'.
export const DB_USER = process.env.DB_USER ?? 'test_user'; //Eksportuojamas duomenų bazės vartotojo vardas (DB_USER) su numatytąja reikšme 'test_user'.
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'test_password'; //Eksportuojamas duomenų bazės slaptažodis (DB_PASSWORD) su numatytąja reikšme 'test_password'
export const DB_HOST = process.env.DB_HOST ?? 'localhost'; //Eksportuojamas duomenų bazės serverio adresas (DB_HOST) su numatytąja reikšme 'localhost'.
export const DB_PORT = +process.env.DB_PORT ?? 3306; /// + reikalingas kad padarytu i skaitine forma
export const COOKIE_MAX_AGE = +process.env.COOKIE_MAX_AGE ?? 3600;
export const NODE_ENV = process.env.NODE_ENV ?? 'dev';

/*Trumpai:
Šis failas:

Nuskaito komandinės eilutės argumentus (pvz., --env=development).

Įkelia atitinkamą .env failą pagal argumentą.

Eksportuoja svarbius nustatymus (PORT, DB duomenis, COOKIE_MAX_AGE) su numatytosiomis reikšmėmis, jei jos nenustatytos .env faile.*/
