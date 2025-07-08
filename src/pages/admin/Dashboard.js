import { COOKIE_MAX_AGE } from "../../env.js";
import { AdminTemplate } from "../../templates/AdminTemplate.js"; //Importuojama konstanta COOKIE_MAX_AGE iš failo ../../env.js. Tai nurodo, kiek sekundžių galioja sausainėlis (cookie).
//Importuojama klasė AdminTemplate iš failo ../../templates/AdminTemplate.js. Ši klasė tikriausiai yra pagrindinė šablono klasė, kurią ši klasė (PageDashboard) išplečia.

export class PageDashboard extends AdminTemplate { //Eksportuojama klasė PageDashboard, kuri paveldi iš AdminTemplate. Tai reiškia, kad ji turės visas AdminTemplate funkcijas ir savybes.
    main() { //Apibrėžiama main() metodas, kuris atsakingas už pagrindinio puslapio turinio generavimą.
        if (!this.req.user.isLoggedIn) { //Tikrinama, ar vartotojas nėra prisijungęs (this.req.user.isLoggedIn yra false).
            return `
                <main>
                   <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="h1">403 - eik prisijungti</h1>
                            </div>
                        </div>
                    </div>
                </main>`;
        }

        const cookie = this.req.user.login_token_created_at.getTime();//Gautas sausainėlio sukūrimo laikas (login_token_created_at) ir paverčiamas į milisekundes nuo epochos (getTime()).
        const secondsLeft = Math.floor(COOKIE_MAX_AGE - (Date.now() - cookie) / 1000);
        const seconds = secondsLeft % 60;
        const minutes = (secondsLeft - seconds) / 60;

        /*Apskaičiuojama, kiek sekundžių liko iki sausainėlio galiojimo pabaigos:

Date.now() – dabartinis laikas milisekundėmis,

Date.now() - cookie – kiek laiko praėjo nuo sausainėlio sukūrimo,

(Date.now() - cookie) / 1000 – paverčiama į sekundes,

COOKIE_MAX_AGE - ... – atimama iš maksimalaus sausainėlio amžiaus,

Math.floor() – suapvalinama iki sveiko skaičiaus.*/

        return `
            <main>
               <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="display-1">Welcome to your dashboard!</h1>
                            <p class="display-6">Username: ${this.req.user.username}</p>
                            <p class="display-6">Email: ${this.req.user.email}</p>
                            <p class="display-6">Likęs sesijos laikas: ${minutes}:${seconds}</p>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}
/*Trumpai:
Ši klasė atvaizduoja administratoriaus valdymo skydelį (dashboard):

Jei vartotojas neprisijungęs – rodomas 403 klaidos pranešimas.

Jei prisijungęs – rodoma:

Sveikinimas,

Vartotojo vardas ir el. paštas,

Likęs sesijos laikas (minutės ir sekundės).*/