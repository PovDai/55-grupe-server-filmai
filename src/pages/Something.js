import { testData } from "../data/testData.js";
import { PageTemplate } from "../templates/PageTemplate.js";
import { someTesting } from "../ui/somethingTest.js";


export class PageTest extends PageTemplate {
    main() {
        // Pridedame SVG sprite su checkmark simboliu
        const svgSprite = `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  </symbol>
</svg>`;

       
        let HTML = '';
        for (const item of testData) {
            HTML += `<li class="mb-1"><a class="link-secondary text-decoration-none" href="${item.href}">${item.title}</a></li>`;
        }

        return `
<div class="container py-3"> 
    ${svgSprite}
    <main>
        ${someTesting()}
        
        <h2 class="display-6 text-center mb-4">Compare plans</h2>
        
        <div class="table-responsive">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th style="width: 34%;"></th>
                        <th style="width: 22%;">Free</th>
                        <th style="width: 22%;">Pro</th>
                        <th style="width: 22%;">Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" class="text-start">Public</th>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-start">Private</th>
                        <td></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-start">Permissions</th>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-start">Sharing</th>
                        <td></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-start">Unlimited members</th>
                        <td></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-start">Extra security</th>
                        <td></td>
                        <td></td>
                        <td><svg class="bi text-success" width="24" height="24" fill="currentColor"><use xlink:href="#check"/></svg></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
            <div class="col-12 col-md">
                <img class="mb-2" src="/img/bootstrap-logo.svg" alt="" width="24" height="19">
                <small class="d-block mb-3 text-body-secondary">&copy;2025</small>
            </div>
            <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                    ${HTML}
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
                </ul>
            </div>
        </div>
    </footer>
</div>`;
    }
}