import dotenv from 'dotenv';

const argList = process.argv.slice(2); // suranda json failo scriptus --env=developt
const args = {};


for (const str of argList) {
    const [key, value] = str.split('='); // filtruoja env json, iesko ar nera kokio neaiskaus. 

    if (key && value && key.startsWith('--')) {
        args[key.slice(2)] = value;
    }
}

 dotenv.config({
     path: 'src/.env.' + args.env,
     quiet: true,
});




export const PORT = +process.env.PORT ?? 5517; // pliusas pakeiciai i skaiciu reiksme, jeigu buss ne skaicius nepaims porto. 
export const TITLE = process.env.TITLE ?? 'Project title';
export const DB_DATABASE = process.env.DB_DATABASE ?? 'test_db';
export const DB_USER = process.env.DB_USER ?? 'test_user';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'test_password';
export const DB_HOST = process.env.DB_HOST ?? 'localhost';
export const DB_PORT = +process.env.DB_PORT ?? 3306; /// + reikalingas kad padarytu i skaitine forma

