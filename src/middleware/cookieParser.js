export function cookieParser(req, res, next) { //Eksportuojama funkcija pavadinimu cookieParser, kuri priima užklausos objektą (req), atsakymo objektą (res) ir next funkciją (naudojama middleware).
    req.cookies = {}; //Inicializuojamas tuščias objektas req.cookies, kuriame bus saugomi sausainėliai (cookies).

    if (typeof req.headers.cookie !== 'string') { //Tikrinama, ar užklausos antraštėse (headers) yra cookie ir ar ji yra tekstinė (string). Jei ne, iškviečiama next() funkcija ir nutraukiamas tolimesnis vykdymas
        return next();
    }

    const cookieParts = req.headers.cookie //req.headers.cookie reikšmė (pvz., "name=John; age=30") skaidoma į dalis pagal kabliataškį (;), o tada kiekviena dalis apvaloma (pašalinami tarpai).
        .split(';')
        .map(s => s.trim());

    for (const cookie of cookieParts) { //Ciklas, kuris apdoroja kiekvieną sausainėlio dalį (cookieParts masyvą).
        const splitIndex = cookie.indexOf('='); //Randamas lygybės ženklo (=) pozicijos indeksas sausainėlio eilutėje (pvz., "name=John" → = yra 4 pozicijoje).
        const key = cookie.slice(0, splitIndex); //Iš sausainėlio eilutės iškerpama dalis iki = (pvz., "name=John" → key bus "name").
        const value = cookie.slice(splitIndex + 1);//Iš sausainėlio eilutės iškerpama dalis po = (pvz., "name=John" → value bus "John").

        req.cookies[key] = value; //Sausainėlio rakto (key) ir reikšmės (value) pora įrašoma į req.cookies objektą (pvz., req.cookies.name = "John").
    }

    return next(); //Iškviečiama next() funkcija, perduodant kontrolę kitam middleware'ui arba maršrutizavimo handleriui.
}