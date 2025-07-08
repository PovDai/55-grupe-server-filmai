export class IsValid {//Eksportuojama klasė IsValid, skirta duomenų validacijai
    static fields(data, schema) { 
        /*Statinis metodas fields, kuris priima:

data - validuojamus duomenis (objektas)

schema - validavimo schemą (objektas)*/
        const errors = {}; //Sukuriamas tuščias objektas errors, kuriame bus saugomos validavimo klaidos

        const requiredKeysCount = Object.keys(schema).length; //Suskaičiuojamas reikalingų laukų skaičius iš validavimo schemos
        const dataKeysCount = Object.keys(data).length; //Suskaičiuojamas gautų duomenų laukų skaičius

        if (dataKeysCount !== requiredKeysCount) {
            return [true, 'Atejusiuose duomenyse duomenu kiekis nesutampa su reikalaujamu duomenu apimtimi'];
        }
        /*Jei gautų duomenų laukų skaičius nesutampa su reikalingu, grąžinama klaida:

true - klaidos buvimas

Klaidos pranešimas apie nesutampantį laukų skaiči*/

        for (const key in schema) { //Ciklas per visus validavimo schemos raktus (laukus)
            const funcName = schema[key]; //Gaunamas validavimo funkcijos pavadinimas iš schemos
            const func = IsValid[funcName]; //Gaunama pati validavimo funkcija iš klasės metodų
            const value = data[key]; //Iš duomenų paimama reikšmė, kurią reikia validuoti
            const [err, msg] = func(value);
            /*Iškviečiama validavimo funkcija su reikšme, gaunamas rezultatas:

err - ar yra klaida (boolean)

msg - klaidos pranešimas (jei yra)*/

            if (err) {
                errors[key] = msg; //Jei validavimas nepavyko, klaida įrašoma į errors objektą su atitinkamu raktu
            }
        }

        return [Object.keys(errors).length > 0, errors];
        /*Grąžinamas validavimo rezultatas:

Pirmas elementas - ar yra klaidų (boolean)

Antras elementas - objektas su klaidomis (jei yra)*/
    }
    /*Tikrina, ar gautų duomenų struktūra atitinka schemą

Kiekvienam laukui pritaiko atitinkamą validavimo funkciją

Surinktas klaidas grąžina struktūruota forma

Norint naudoti šią klasę, reikia turėti papildomus validavimo metodus klasėje IsValid, pvz.:

nonEmptyString

email

password

etc.*/

    static username(text) {
        const minSize = 3;
        const maxSize = 20;
        const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        if (typeof text !== 'string') {
            return [true, 'Slapyvardis turi buti tekstas'];
        }

        if (text.length < minSize) {
            return [true, `Slapyvardis turi buti ne maziau ${minSize} simboliu`];
        }

        if (text.length > maxSize) {
            return [true, `Slapyvardis turi buti ne daugiau ${maxSize} simboliu`];
        }

        if (text.includes(' ')) {
            return [true, 'Slapyvardis negali tureti tarpu'];
        }

        const foundIllegalSymbols = [];

        for (const s of text) {
            if (!allowedSymbols.includes(s) && !foundIllegalSymbols.includes(s)) {
                foundIllegalSymbols.push(s);
            }
        }

        if (foundIllegalSymbols.length) {
            return [true, `Slapyvardyje panaudotas neleistinas simbolis: ${foundIllegalSymbols.join(', ')}`];
        }

        return [false, ''];
    }

    static password(text) {
        const minSize = 12;
        const maxSize = 100;

        if (typeof text !== 'string') {
            return [true, 'Slaptazodis turi buti tekstas'];
        }

        if (text.length < minSize) {
            return [true, `Slaptazodis turi tureti ne maziau ${minSize} simboliu`];
        }

        if (text.length > maxSize) {
            return [true, `Slaptazodis turi tureti ne daugiau ${maxSize} simboliu`];
        }

        return [false, ''];
    }

    static age(number) {
        const min = 18;
        const max = 130;

        if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
            return [true, 'Amzius turi buti teigiamas sveikasis skaicius'];
        }

        if (number < min) {
            return [true, `Amzius turi tureti ne mazesnis nei ${min} metu`];
        }

        if (number > max) {
            return [true, `Amzius turi tureti ne didesnis nei ${max} metu`];
        }

        return [false, ''];
    }

    static email(text) {
        return [false, ''];
    }

    static nonEmptyString(text) {
        if (typeof text !== 'string') {
            return [true, 'Turi buti tekstas'];
        }

        if (text.length === 0) {
            return [true, 'Tekstas turi buti ne tuscias'];
        }

        return [false, ''];
    }

    static tos(text) {
        if (typeof text !== 'string') {
            return [true, 'Sutikimas su taisyklemis turi buti teksto tipo.'];
        }

        if (text !== 'agree') {
            return [true, 'Sutikimas turi buti naudojant zodi "agree".'];
        }

        return [false, ''];
    }
}