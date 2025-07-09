import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageError401 extends PageTemplate {
    constructor(req) {
        super(req);
    }

    main() {
        return `
            <main class="container">
                <div class="row">
                    <div class="col-12">
                       <h1>401 error neturi teises matyti sio turinio</h1>
                       <a href="/login">GO to login</a>
                    </div>
                </div>
            </main>`;
    }
}