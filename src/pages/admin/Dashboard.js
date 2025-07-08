import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    main() {
        const now = Date.now();
        const cookie = this.req.user.login_token_created_at.getTime();
        const cookieMaxAge = 3600;

        const secondsLeft=Math.floor(cookieMaxAge-(Date.now()))
        const seconds = secondsLeft % 60;
        const minutes = (secondsLeft - seconds) / 60;
      

        return `
            <main>
               <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="display-1">Welcome to your dashboard!</h1>
                            <p class="display-6">Username: ${this.req.user.username}</p>
                            <p class="display-6">Email: ${this.req.user.email}</p>
                            <p class="display-6">Email: </p>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}