import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { registerForm } from "../ui/forms/registerForm.js";

export class PageRegister extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Register')}
                ${registerForm()}
             
            </main>`;
    }
}