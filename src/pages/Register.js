import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { registerForm } from "../ui/forms/registerForm.js";

export class PageRegister extends PageTemplate {
    constructor(req) {
        super(req)
        this.pageJS='register'
    }
    main() {
        return `
            <main>
                ${pageTitle('Register')}
                ${registerForm()}
             
            </main>`;
    }
}