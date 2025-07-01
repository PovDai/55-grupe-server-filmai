import { testCard } from "../data/testData.js";
export function someTesting() {
    let HTML1 = '';
    for (const item1 of testCard) {
        HTML1 += `<div class="col">
<div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
        <h4 class="my-0 fw-normal">${item1.h4}</h4>
    </div>
    <div class="card-body">
        <h1 class="card-title pricing-card-title">$${item1.h1}<small class="text-body-secondary fw-light">/mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
            <li>${item1.li1}</li>
            <li>${item1.li2}</li>
            <li>${item1.li3}</li>
            <li>${item1.li4}</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">${item1.but}</button>
    </div>
</div>
</div>`

    }
    return `
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            ${HTML1}
        </div>



    `
}




